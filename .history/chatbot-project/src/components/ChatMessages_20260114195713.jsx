import { useState, useRef, useEffect } from 'react'

export function ChatMessages({ chatMessages }){
  const chatMesssagesRef = useAutoScroll([chatMessages]);

return(
  <div className="chat-messages-container"
  ref={chatMesssagesRef}>
    {chatMessages.map((chatMessage) => { 
      return(
        <ChatMessage 
          message={chatMessage.message}
          sender={chatMessage.sender}
          key={chatMessage.id}
        />
      );
    })}
  </div>
);

}