import React from 'react';
import './Subscription.css';

function Subscription({ date, amount, title }) {
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.toLocaleString('default', { day: '2-digit' });
    const year = date.getFullYear();
    return (
        <div className='subscription'>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
            <h2 className='subscription_title'>{title}</h2>
            <div className='subscription_price'>{amount}</div>
        </div>
    )
}

export default Subscription;