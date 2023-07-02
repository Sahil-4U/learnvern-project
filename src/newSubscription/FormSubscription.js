import React from 'react'

function FormSubscription() {
    return (
        <form>
            <div className='new_subscription_controls'>
                <div className='new_subscription_control'>
                    <label>Title</label>
                    <input type='text' />
                </div>
                <div className='new_subscription_control'>
                    <label>Date</label>
                    <input type='date' />
                </div>
                <div className='new_subscription_control'>
                    <label>Amount</label>
                    <input type='text' min='10' max='5000' />
                </div>
            </div>
            <div className='new_subscription_actions'>
                <button type='submit'>Click me to create new </button>
            </div>
        </form>
    )
}

export default FormSubscription