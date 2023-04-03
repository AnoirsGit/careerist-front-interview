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
        const response = await axios.get(`${process.env.REACT_APP_API_URI}/api/messages`);
        console.log(response);
        setMessages(response.data.sort((a, b) => new Date(b.date) - new Date(a.date)).map( message => ({...message, date: formatDate(message.date)})));
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessages();
  }, []);

  const addMessage = (message) => {
    message.date = formatDate(message.date);
    setMessages([message, ...messages]);
  }

  return (
    <>
      <div className="flex bg-white flex-col mx-6 my-20 lg:mx-12 lg:my-32">
        {messages.map(({ name, text, date }) => (
          <Message key={name} name={name} text={text} date={date} />
        ))}
      </div>
      <div className="fixed bg-white bottom-0 w-full border border-slate-400 h-max px-4 lg:px-8 py-2">
        <ChatForm addMewMessage={addMessage} />
      </div>
    </>
  );
};

export default Chat;
