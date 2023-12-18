import React, { useEffect, useState } from "react";
import { API_URLS } from "../services/api.url";
import { useOutletContext, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { DeleteOutline } from "@mui/icons-material";
import { Box, Checkbox, List } from "@mui/material";
import { EMPTY_TABS } from "../constants/constant";

import Email from "./Email";
import NoMails from "./common/NoMails";

export default function Emails() {
  const [selectedEmail ,  setSlectedEmail] = useState([]);
  const [refresh , setRefresh] = useState(false);
  const { openDrawer } = useOutletContext();
  const { type } = useParams();

  const getEmailService = useApi(API_URLS.getEmailFromType);
  const moveEmailsToBinService = useApi(API_URLS.moveEmailToBin);
  const deleteEmailsService = useApi(API_URLS.deleteEmails);

  useEffect(() => {
    getEmailService.call({}, type);
  }, [type , refresh]);

  const onSelectEmail = (e)=>{
    if(e.target.checked){
      const email =  getEmailService?.response?.map(email => email._id)
      setSlectedEmail(email);
    } else{
       setSlectedEmail([]);
    }
  }
  const deleteSelectedEmails = (e)=>{
    if(type === 'bin'){
      deleteEmailsService.call(selectedEmail)
    }else {
      moveEmailsToBinService.call(selectedEmail);
    }
    setRefresh(preStat => !preStat);
  }

  return (
    <Box
      style={
        openDrawer
          ? { marginLeft: 250, width: "calc(100% - 250px)" }
          : { width: "100%" , position: 'relative' , height: '90vh' }
      }
    >
      <Box
        style={{
          padding: "20px 10px 0 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox size="samll"  onChange={(e)=> onSelectEmail(e)} />
        <DeleteOutline onClick={(e)=> deleteSelectedEmails(e)} />
      </Box>
      <List>
        {getEmailService?.response?.map((email) => (
          <Email
           email={email}
            key={email._id}
            selectedEmail={selectedEmail}
            setRefresh={setRefresh}
            setSlectedEmail={setSlectedEmail}
           />
        ))}
      </List>
      {
                getEmailService?.response?.length === 0 &&
                    <NoMails message={EMPTY_TABS[type]}  />
            }
    </Box>
  );
}
