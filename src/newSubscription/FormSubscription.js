import React from 'react';
import './FormSubscription.css'

function FormSubscription() {
    const handleTitle = (event) => {
        console.log(event.target.value);
    }
    const handleDate = (event) => {
        console.log(event.target.value);
    }
    const handleAmount = (event) => {
        console.log(event.target.value);
    }

    return (
        <form>
            <div className='new_subscription_controls'>
                <div className='new_subscription_control'>
                    <label>Title</label>
                    <input type='text' onChange={handleTitle} />
                </div>
                <div className='new_subscription_control'>
                    <label>Date</label>
                    <input type='date' onChange={handleDate} />
                </div>
                <div className='new_subscription_control'>
                    <label>Amount</label>
                    <input type='number' min='10' max='5000' onChange={handleAmount} />
                </div>
            </div>
            <div className='new_subscription_actions'>
                <button type='button'>Click me </button>
            </div>
        </form>
    )
}

export default FormSubscription