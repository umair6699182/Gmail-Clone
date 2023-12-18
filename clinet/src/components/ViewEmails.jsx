import React from "react";

import { useOutletContext , useLocation} from "react-router-dom";
import { Box , Typography , styled} from "@mui/material";
import { ArrowBack, Delete } from "@mui/icons-material";
import { emptyProfilePic } from "../constants/constant";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.url";


const IconWrapper = styled(Box)({
  padding: 15
});

const Subject = styled(Typography)({
  fontSize: 22,
  margin: '10px 0 20px 75px',
  display: 'flex'
});
const Indicator = styled(Box)`
    font-size: 12px !important;
    background: #ddd;
    color: #222;
    border-radius: 4px;
    margin-left: 6px;
    padding: 2px 4px;
    align-self: center;
`;
const Image = styled('img')({
  borderRadius: '50%',
  width: 40,
  height: 40,
  margin: '5px 10px 0 10px',
  backgroundColor: '#cccccc'
});
const Container = styled(Box)({
  marginLeft: 15,
  // width: '100%',
  display: 'flex',
  // '& > div': {
  //     display: 'flex',
  //     '& > p > span': {
  //         fontSize: 12,
  //         color: '#5E5E5E'
  //     }
  // }
});
const Wrapper = styled(Box)({
      display: 'flex',
      // width: '100%',
      '& > p > span': {
        fontSize: 12,
        color: '#5E5E5E'
      }
})
      



const Date = styled(Typography)({
  margin: '0 50px 0 auto',
  fontSize: 12,
  color: '#5E5E5E'
})


export default function ViewEmails() {
  const { openDrawer } = useOutletContext();
  const { state } = useLocation();
  const {email} = state;

  const moveEmailsToBinService = useApi(API_URLS.moveEmailToBin);


  const deleteEmails = ()=>{
      moveEmailsToBinService.call([email._id]);
      window.history.back();

  }

  return (
    <Box
      style={
        openDrawer ? { marginLeft: 250,} : { width: "100%" }
      }
    >
      <IconWrapper>
        <ArrowBack
          fontSize="small"
          color="action"
          onClick={()=> window.history.back()}
        />
        <Delete fontSize="small" color="action" style={{ marginLeft: 40 }} onClick={()=> deleteEmails()} />
      </IconWrapper>
      <Subject>
        {email.subject} <Indicator>Inbox</Indicator>
      </Subject>
      <Container>
        <Image src={emptyProfilePic} alt="dp" />
        <Box style={{width: 'calc(100% )'}}>
          <Wrapper>
            <Typography style={{marginTop: 12 , marginLeft: 5}}> {email.name}
                <Box component='span'>&nbsp; &#60;{email.to}&#62;</Box>

            </Typography>
            <Date>
                {(new window.Date(email.date).getDate())} &nbsp;
                {(new window.Date(email.date).toLocaleString('default' , {month: 'long'}))} &nbsp;
                {(new window.Date(email.date).getFullYear())}
            </Date>
          </Wrapper>
          <Typography style={{marginTop: 10}}>
            {email.body}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
