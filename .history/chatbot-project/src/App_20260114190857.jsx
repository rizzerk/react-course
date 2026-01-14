import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = React.useState([]);

  //const [chatMessage, setChatMessages] = array;
  //shortcut of:
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

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
