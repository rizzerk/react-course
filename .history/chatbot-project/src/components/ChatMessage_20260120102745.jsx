import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css'
import dayjs from 'dayjs';

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
      {message === 'Loading' ? 
      <img className='loading-image' src={LoadingSpinnerGIF}/> :
      message  
    }
      {time && (
        <div className='chat-message-time'>
          {dayjs(time).format('h:mma')}
        </div>
      )}
    </div>
    {sender === 'user' && (
      <img src={UserProfileImage}
      className="class-messsage-profile" />
    )}


  </div>
  )

}