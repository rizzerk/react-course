import { useState, useRef, useEffect } from 'react'
import RobotProfileImage from './assets/robot.png';
import UserProfileImage from './assets/user.png';
import './App.css'

//props are all the attributes you gave to the component
function ChatMessage({ message, sender }){
  //ChatMessage(props)
  // `const message = props.message;` is the same as `const { message } = props;`
  //const { message, sender } = props;
  //same as FunctionName({variable, variable})

  // if(sender === 'robot'){
  //   return (
  //     <div>
  //       <img src="robot.png" width ="50" />
  //       {message}
  //     </div>
  //   );
  // }

  return (
    // Guard operator: var == var1 && var 2 (if var is equal to var1 then do var2) 
  <div className={
      sender === 'user' 
        ? 'chat-message-user' 
        : 'chat-message-robot'}
  >
    {sender === 'robot' && (
      <img src={RobotProfileImage} 
      className="class-messsage-profile" />
    )}
    <div 
      className="chat-message-text">
      {message}
    </div>
    {sender === 'user' && (
      <img src={UserProfileImage}
      className="class-messsage-profile" />
    )}

  </div>

  )
}

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

function ChatMessages({ chatMessages }){
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
