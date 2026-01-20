import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import LoadingSpinnerGIF from '../assets/loading-spinner.gif';
import './ChatInput.css';
import dayjs from 'dayjs';

export function ChatInput({ chatMessages, setChatMessages }){
  const time = dayjs().valueOf();
  const timestring = dayjs(time).format('h:mma');

  const [inputText, setInputText] = useState('');
  const [getTime, setTime] = useState(timestring);
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
    setTime(timestring);
    setIsLoading(true);

    
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
        time: getTime
      }];
    
    //chatbot temporarily says "Loading..." 
    setChatMessages([
      ...newChatMessages,
      {
        message: <img className='loading-image' src={LoadingSpinnerGIF}/>,
        sender: 'robot',
        id: crypto.randomUUID(),
        time: getTime
      }]);

    const response = await Chatbot.getResponseAsync(inputText);

    
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
        time: getTime
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