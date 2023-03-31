import React, { useEffect, useState } from 'react';

import ChatForm from './components/chat-form';
import Message from './components/message';
import axios from 'axios';

import {formatDate} from "./helpers/date"

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/messages');
        console.log(response);
        setMessages(response.data.sort((a, b) => new Date(b.date) - new Date(a.date)).map( message => ({...message, date: formatDate(message.date)})));
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessages();
  }, []);

  const addMessage = (meesage) => setMessages([meesage, ...messages]);

  return (
    <>
      <div className="flex flex-col mx-12 my-32">
        {messages.map(({ name, text, date }) => (
          <Message key={name} name={name} text={text} date={date} />
        ))}
      </div>
      <div className="fixed bottom-0 w-full border border-slate-400 h-max px-8 py-2">
        <ChatForm addMewMessage={addMessage} />
      </div>
    </>
  );
};

export default Chat;
