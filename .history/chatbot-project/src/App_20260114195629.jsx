import { useState, useRef, useEffect } from 'react'
import { ChatInput } from './components/ChatInput';
import { ChatMessage } from './components/ChatMessage';
import './App.css'


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


function App() {
  const [chatMessages, setChatMessages] = useState([]);

  return(
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message"> Welcome to the chatbot project! Send a message using the textbox below</p>
      )

      }

      <ChatMessages 
      chatMessages={chatMessages}
      />

      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      

    </div>
  );


}

export default App
