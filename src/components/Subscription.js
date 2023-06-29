import React from 'react';
import './Subscription.css';

function Subscription() {
    let date = new Date('2023', '06', '29');
    let title = 'Monthly subscription';
    let amount = '124.90';
    return (
        <div className='subscription'>
            <div>{date.toISOString()}</div>
            <h2 className='subscription_title'>{title}</h2>
            <div className='subscription_price'>{amount}</div>
        </div>
    )
}

export default Subscription;