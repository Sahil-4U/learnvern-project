import React, { useState } from 'react';
import './Subscription.css';
import SubscriptionDate from './SubscriptionDate';
import Container from '../templates/Container';

function Subscription({ date, amount, title }) {
    const [titlee, setTitle] = useState(title);
    const handleClick = () => {
        setTitle('changed title');
    }
    return (
        <Container className='subscription'>
            <SubscriptionDate date={date} />
            <h2 className='subscription_title'>{titlee}</h2>
            <div className='subscription_price'>{amount}</div>
            <button type='button' onClick={handleClick}>Change title</button>
        </Container>
    )
}

export default Subscription;