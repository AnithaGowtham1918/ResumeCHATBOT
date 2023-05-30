import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import './home.css';
import ChatMessage from './chatMessage';
import { analyze } from '../utilis';
function Home(props) {
    const [messages,setMessages]= useState([{
        message:"Hai Welcome to ResumeChat. May I know your name?"
    }]);
    const [text,setText]=useState('');
    function onSend(){
        let list =[...messages,{message:text,user:true}];
        if(list.length>2){
            const reply = analyze(text);
            list=[...list,
            {message:reply}];
        }
        else{
            list=[...list,
            {
                message:`Hi, ${text}`,
            },
        {
            message:"How can i help you?",
        },
    ];
    }
    setMessages(list);
    setText("");
    }
    return (
        <div className='home-main'>
        <div className='d-flex align-items-center justify-content-center'>
            <div className='text-primary'><h1>Welcome! to My Resume ChatBot</h1></div>  
            </div> 
        <div className='chat-message' >
            {messages.length>0 && messages.map((data)=><ChatMessage {...data} />)}
            <div className='d-flex mt-2'>
                <input type='text' className='form-control' value={text} onChange={(e)=>setText(e.target.value)}></input>
               <Button type="primary" className='ms-2' onClick={onSend}>Send</Button>
            </div>
            <div id='copyright' className='mt-3' style={{fontSize:"13px"}}>Copyrights Reserved By ANITHA GOWTHAM</div>
        </div>
        </div>
    );
}

export default Home;