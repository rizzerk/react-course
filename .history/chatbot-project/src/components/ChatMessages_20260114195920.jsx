import { useState, useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';

function useAutoScroll( dependencies ){
  const containerRef = useRef(null);
 
   //runs the code after the component is created or updated
   useEffect(() =>{
     
    const containerElem = containerRef.current;
    if(containerElem){
     containerElem.scrollTop = containerElem.scrollHeight;
    }   
 
   //now runs every time chatMessages changes. [] controls when useEffect runs
   }, dependencies);
 
   return containerRef;
 
 }

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