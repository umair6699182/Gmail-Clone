import React , {useState} from "react";
import {
  Dialog,
  Typography,
  Button,
  Box,
  styled,
  InputBase,
  TextField,
} from "@mui/material";
import { Close, DeleteOutline } from "@mui/icons-material";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.url";

const dialogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};
const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background: #f2f6fc;
  & > p {
    font-size: 14px;
    font-weight: 500;
  }
  & > svg {
    cursor: pointer;
  }
`;
const RecipientWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  & > div {
    font-size: 14px;
    border-bottom: 1px solid #f5f5f5;
    margin-top: 10px;
  }
`;
const Footer = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  align-items: center;
`;

const SendButton = styled(Button)`
  background: #0b57d0;
  color: #fff;
  font-weight: 500;
  text-transform: none;
  border-radius: 18px;
  width: 100px;
`;

export default function ComposeMail({ openBTN, CloseBtn }) {

  const [data , setData ] = useState({});

  const sentEmailService = useApi(API_URLS.saveSentEmail);
  const saveDraftService = useApi(API_URLS.saveDraftEmails)


  const config = {
    Host: "smtp.elasticemail.com",
    Username: 'umiar123@yopmail.com',
    Password: 'CD4B60DAB97767DA15FA9780CD3CACDCC033',
    Port: 2525,
  };


  const closeComposeMail = (e) => {

    
    e.preventDefault();

    const payload = {
      to: data.to,
      from: "u03076699182@gmail.com",
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: '',
      name: "Umiar Malik",
      starred: false,
      type: 'drafts'
    }

    saveDraftService.call(payload)

    if(!saveDraftService.Error){
        CloseBtn(false);
        setData({});
    }
    CloseBtn(false);


  };
  const onValueChange = (e) => {
      setData({...data , [e.target.name]: e.target.value});
  };


  const sendEmail = (e) => {

    e.preventDefault();

    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "u03076699182@gmail.com",
        Subject: data.subject,
        Body: data.body,
      }).then((message) => alert(message));
    }


    const payload = {
      to: data.to,
      from: "u03076699182@gmail.com",
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: '',
      name: "Umiar Malik",
      starred: false,
      type: 'sent'
    }

    sentEmailService.call(payload)

    if(!sentEmailService.Error){
        CloseBtn(false);
        setData({});
    }

    CloseBtn(false);
  };

  return (
    <Dialog open={openBTN} PaperProps={{ sx: dialogStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
      </Header>
      <RecipientWrapper>
        <InputBase
          placeholder="Recipients"
          name="to"
          onChange={(e) => onValueChange(e)}
        />
        <InputBase
          placeholder="Subject"
          name="subject"
          onChange={(e) => onValueChange(e)}
        />
      </RecipientWrapper>
      <TextField
        multiline
        rows={15.5}
        sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
        name="body"
        onChange={(e) => onValueChange(e)}
      />
      <Footer>
        <SendButton onClick={(e) => sendEmail(e)}>Send</SendButton>
        <DeleteOutline onClick={() => CloseBtn(false)} />
      </Footer>
    </Dialog>
  );
}
