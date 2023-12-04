import React, { useState } from "react";

export default function MessageInput({ send } : {send: (value:string) => void}) {
  const [value, setValue] = useState<string>('');
  return (
    <>
      <input 
        onChange={(e)=>setValue(e.target.value)} 
        placeholder='Youre Message Here' 
        value={value}
      > 
      </input>
      <button onClick={() => send(value)}>Send</button>
    </>
  )
}