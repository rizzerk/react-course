import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css'

export function ChatMessage({ message, sender, time }){
  console.log(time);
  return (
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
      {time}
    </div>
    {sender === 'user' && (
      <img src={UserProfileImage}
      className="class-messsage-profile" />
    )}


  </div>
  )

}