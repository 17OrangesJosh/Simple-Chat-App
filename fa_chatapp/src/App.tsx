

import { useEffect, useState } from 'react'
import './App.css'
import io, { Socket } from 'socket.io-client'
import MessageInput from './Messageinput';
import Messages from './Messages';

function App() {
  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<string[]>([]);

  const send = (value: string) => {
    socket?.emit('message', value);
  }

  useEffect(() => {
    const newSocket=io('http://127.0.0.1:8001');
    setSocket(newSocket);
  },[setSocket]);

  const messageListner = (message: string) => {
    setMessages([...messages, message]);
  }

  useEffect(() => {
    socket?.on("message", messageListner);
    return () => {
      socket?.off('message', messageListner);
    };
  },[messageListner]);

  return (
    <>
      <MessageInput
        send={send}
      />
      <Messages
        messages={messages}
      />
    </>
  )
}

export default App
