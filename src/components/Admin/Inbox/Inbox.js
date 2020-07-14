import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { backendDomain } from '../../../assets/keys';

import Message from './Message/Message';
import Preview from './Preview/Preview';
import Spinner from '../../UI/Spinner/Spinner';

import classes from './Inbox.module.css';

const Inbox = ({ back }) => {
    const [messages, setMessages] = useState();
    const [key, setKey] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = () => {
        setLoading(true);

        axios.get(backendDomain + 'admin/beautyatluxx/messages', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
            .then(response => {
                setMessages(response.data.messages);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
            });
    }

    const deleteMessage = () => {
        setLoading(true);
        
        axios.delete(backendDomain + 'admin/beautyatluxx/messages/' + key, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
            .then(response => {
                setLoading(false);
                setKey(null);
                fetchMessages();
            })
            .catch(error => {
                setLoading(false);
            });
    }

    return (
    	<div className = { classes.Inbox }>
            { loading ? <Spinner /> :
                key != null ? 
                    <Message 
                        message = { messages[key] }
                        back = { () => setKey(null) } 
                        remove = { deleteMessage } /> : 
                    <Preview 
                        messages = { messages }
                        expand = { setKey }
                        back = { back } /> 
            }
    	</div>
    );
}

export default Inbox;
