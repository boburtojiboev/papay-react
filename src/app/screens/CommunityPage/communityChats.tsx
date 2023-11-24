import React, { useState } from "react";
import { Avatar, Box, Stack } from "@mui/material";
import { Send } from "@mui/icons-material";
import "../../../css/community.css";

const [massagesList, setMassagesList] = useState({});

export function CommunityChats() {
  return (
    <Stack className="chat_frame">
      <Box className="chat_top">Jonli Muloqot</Box>
      <Box className="chat_content">
        <Stack className="chat_main">
          <Box
            flexDirection={"row"}
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <div className="msg_left">Bu yerda jonli muloqot</div>
          </Box>
          <Box
            flexDirection={"row"}
            style={{ display: "flex" }}
            alignItems={"flex-end"}
            justifyContent={"flex-end"}
            sx={{ m: "10px 0px" }}
          >
            <div className="msg_right">Bu sizning habaringiz</div>
          </Box>
          <Box
            flexDirection={"row"}
            style={{ display: "flex" }}
            sx={{ m: "10px 0px" }}
          >
            <Avatar alt="simon" src="/community/cute_girl.jpeg"/>
            <div className="msg_left">Bu yerda boshqalarni habarlari</div>
          </Box>
        </Stack>
      </Box>
      <Box className="chat_bott"> 
        <input
          type="text"
          name="message"
          className="msg_input"
          placeholder="Xabar jo'natish"
        />
        <button className="send_msg_btn">{/*checke*/}
          <Send style={{ color: "red" }} />
        </button>
      </Box>
    </Stack>
  );
}
