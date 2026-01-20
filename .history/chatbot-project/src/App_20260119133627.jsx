import { useEffect, useState } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import { Chatbot } from 'supersimpledev';
import './App.css'


function App() {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    Chatbot.addResponses(
      {
        'Bye' : 'Goodbye',
        'Yo' : 'Yo Wassup';
      }
    );

  }, [])

  return(
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message"> Welcome to the chatbot project! Send a message using the textbox below</p>
      )}

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
