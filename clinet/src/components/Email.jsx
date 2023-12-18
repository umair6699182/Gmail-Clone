import React from 'react'
import { Typography , Box , Checkbox , styled} from '@mui/material'
import { Star, StarBorder } from '@mui/icons-material';
import ViewEmails from './ViewEmails';
import { Navigate, useNavigate } from 'react-router-dom';
import { routes } from '../routes/routes';  
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.url';

const Wrapper = styled(Box)`
    padding: 0 0 0 10px;
    background: #f2f6fc;
    display: flex;
    align-items: center;
    cursor: pointer;
    & > div {
        display: flex;
        width: 100%
    }
    & > div > p {
        font-size: 14px;
    }
`;
const Indicator = styled(Typography)`
    font-size: 12px !important;
    background: #ddd;
    color: #222;
    border-radius: 4px;
    margin-right: 6px;
    padding: 0 4px;
`;
const Date = styled(Typography)({
    marginLeft: 'auto',
    marginRight: 20,
    fontSize: 12,
    color: '#5F6368'
})

export default function Email({email , selectedEmail , setRefresh , setSlectedEmail}) {

        const navigate = useNavigate();
        const toogleStarredServices = useApi(API_URLS.toggleStarredEmail);
       

        const onViewChange = ()=>{
            navigate(routes.view.path , {state: {email: email}});
        }
        const toggleStarredMalis = ()=>{
            toogleStarredServices.call({id: email._id , value: !email.starred})
            setRefresh(prevstate => !prevstate)
        }
        const handleChange = () => {
            if (selectedEmail.includes(email._id)) {
                setSlectedEmail(prevState => prevState.filter(id => id !== email._id));
            } else {
                setSlectedEmail(prevState => [...prevState, email._id]);
            }
        }

  return (
    <Wrapper>
        <Checkbox size='small' 
        checked={selectedEmail.includes(email._id)}
        onChange={()=> handleChange()}
        />
        {
            email.starred ?
                     <Star fontSize='small' style={{marginRight: 10 , color: '#FFF200'}} onClick={()=> toggleStarredMalis()} />
            : 
                     <StarBorder fontSize='small' style={{marginRight: 10}} onClick={()=> toggleStarredMalis()} />
        }
       
        <Box onClick={()=> onViewChange()}>
            <Typography style={{ width: 200 , overflow: 'hidden' }}>{email.name}</Typography>
            <Indicator>inbox</Indicator>
            <Typography>{email.subject} {email.body && '-'} {email.body}</Typography>
            <Date>
                {(new window.Date(email.date).getDate())}
                {(new window.Date(email.date).toLocaleString('default' , {month: 'long'}))}
            </Date>
        </Box>
    </Wrapper>
  )
}
