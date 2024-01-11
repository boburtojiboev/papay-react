import React, { useContext, useEffect, useState } from "react";
import { Avatar, Box, Stack } from "@mui/material";
import { Send } from "@mui/icons-material";
import "../../../css/community.css";
import { SocketContext } from "../../context/socket";

export function CommunityChats() {
    /** Initializations */
    const [messagesList, setMessagesList] = useState([]);
    const socket = useContext(SocketContext);
    const [onlineUsers, setOnlineUsers] = useState<number>(0);
  useEffect(() => {
    socket.connect();
    console.log("printed");

    socket?.on("connect", () => {
      console.log("Client: connected");
    });

    socket.on("newMsg", (new_message: any) => {
      console.log("Client: new message");
    });
    socket.on("greetMsg", (new_message: any) => {
      console.log("Client: greet message");
    });
    socket.on("infoMsg", (msg: any) => {
      console.log("Client: info message");
      setOnlineUsers(msg.total);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  /** Handlers */
  return (
    <Stack className="chat_frame">
      <Box className="chat_top">Jonli Muloqot {onlineUsers}</Box>
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
