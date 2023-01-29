import { useState,useEffect } from 'react'
import Gun from 'gun'
const gun = Gun(['https://dapp-chat.onrender.com/gun'])
const messagesRef = gun.get('dapp-126511')

function App() {
 
  const [newMessage, setNewMessage] = useState({
    sender: 'phyo',
    content: '',
    createdAt: Date().substring(4, 11),
    messageId: Date.now()
  })
  const [allChat,setAllChat] = useState([])

  useEffect(()=>{
    messagesRef.map().once(message =>{
      setAllChat((prev) => [...prev,message])
   }) 
   
  },[])

  const handleKeyDown = event => {
    
    if (event.key === 'Enter') {
      event.preventDefault();
      messagesRef.set(newMessage)
      console.log('User pressed Enter ✅');
    }
  };
  

  return (
    <div className=''>
      {
         allChat.map((message,index) =>{
          console.log(message.sender)
           return (<>
            <p key={index}> 
              <b>{message.sender}</b> :
               {message.content}
               {message.createdAt}
            </p>
           </>)
        })
      }
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <input 
        type='text'
        id="message"
        name="message"
        value={newMessage.content}
        onChange={event => setNewMessage( prev => { 
          return { ...prev,content: event.target.value}
        })}
        onKeyDown={handleKeyDown}
        className=""
        />        

    </div>
  )
}

export default App
