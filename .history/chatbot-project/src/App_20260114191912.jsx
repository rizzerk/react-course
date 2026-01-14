import { useState } from 'react'
import './App.css'

function ChatInput({ chatMessages, setChatMessages }){
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event){
    setInputText(event.target.value);
  }

  async function sendMessage(){

    //checks if chatbot is loading or the input is empty and prevents user from sending a message
    if(isLoading || inputText.trim() === ''){
      return;
    }

    //set textInput as empty and isLoading as true after sending the message
    setInputText('');
    setIsLoading(true);

    
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }];
    
    //chatbot temporarily says "Loading..." 
    setChatMessages([
      ...newChatMessages,
      {
        message: <img className='loading-image' src='loading-spinner.gif'/>,
        sender: 'robot',
        id: crypto.randomUUID()
      }]);

    const response = await Chatbot.getResponseAsync(inputText);

    
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);
    
    //goes back to default state !isLoading
    setIsLoading(false);
  }

  function handelKeyDown(event){
    if(event.key === 'Enter'){
      sendMessage();
    }else if(event.key ==="Escape"){
      setInputText('');
    }
  }

  return(
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to Chatbot" 
        size="30" 
        onChange={saveInputText}
        onKeyDown={handelKeyDown}
        value={inputText}
        className="chat-input"
      />
      <button 
        onClick={sendMessage}
        className="send-button"
      > Send</button>
    </div>
  );
}

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
      <img src="robot.png" 
      className="class-messsage-profile" />
    )}
    <div 
      className="chat-message-text">
      {message}
    </div>
    {sender === 'user' && (
      <img src="user.png" 
      className="class-messsage-profile" />
    )}

  </div>

  )
}

function useAutoScroll( dependencies ){
 const containerRef = React.useRef(null);

  //runs the code after the component is created or updated
  React.useEffect(() =>{
    
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
