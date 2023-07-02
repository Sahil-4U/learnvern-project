import React from 'react';
import './SubscriptionDate.css';

function SubscriptionDate({ date }) {
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.toLocaleString('default', { day: '2-digit' });
    const year = date.getFullYear();
    return (
        <div className='date'>
            <div className='month'>{month}</div>
            <div className='day'>{day}</div>
            <div className='year'>{year}</div>
        </div>
    )
}

export default SubscriptionDate