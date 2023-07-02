import React from 'react';
import './Subscription.css';
import SubscriptionDate from './SubscriptionDate';
import Container from '../templates/Container';

function Subscription({ date, amount, title }) {

    return (
        <Container className='subscription'>
            <SubscriptionDate date={date} />
            <h2 className='subscription_title'>{title}</h2>
            <div className='subscription_price'>{amount}</div>
        </Container>
    )
}

export default Subscription;