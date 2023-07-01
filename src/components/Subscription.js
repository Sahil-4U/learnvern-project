import React from 'react';
import './Subscription.css';
import SubscriptionDate from './SubscriptionDate';

function Subscription({ date, amount, title }) {

    return (
        <div className='subscription'>
            <SubscriptionDate date={date} />
            <h2 className='subscription_title'>{title}</h2>
            <div className='subscription_price'>{amount}</div>
        </div>
    )
}

export default Subscription;