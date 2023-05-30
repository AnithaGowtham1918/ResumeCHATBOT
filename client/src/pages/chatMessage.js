import React from 'react';
import {ChatDots, Person} from 'react-bootstrap-icons';
import './chatMessage.css';
function ChatMessage(props) {
    return (
        <div className={`d-flex ${props.user && 'justify-content-end'}`} >
            {
                props.user ?(
                    <span className='message-right'>
                        <span className='message-text'>{props.message}</span>
                       <Person className='message-icon'></Person>
                    </span>
                ):
                <span className='message-left'>
                    <ChatDots className='message-icon'></ChatDots>
                    <span className='message-text'>{props.message}</span>
                </span>
            }
          
        </div>
    );
}

export default ChatMessage;