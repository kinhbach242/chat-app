import React from "react";
import { Row, Col } from "antd";
import Slidebar from "./Slidebar";
import ChatWindow from "./ChatWindow";
import "./ChatRoom.css";
const ChatRoom = () => {
  return (
    <div>
      <Row>
        <Col span={6}>
          <Slidebar />
        </Col>
        <Col span={18}>
          <ChatWindow />
        </Col>
      </Row>
    </div>
  );
};

export default ChatRoom;
