import React from 'react';
import './Subscription.css';

function Subscription({ date, amount, title }) {

    return (
        <div className='subscription'>
            <div>{date.toISOString()}</div>
            <h2 className='subscription_title'>{title}</h2>
            <div className='subscription_price'>{amount}</div>
        </div>
    )
}

export default Subscription;