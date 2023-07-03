import React, { useState } from 'react';
import './FormSubscription.css'

function FormSubscription() {
    const [form, setForm] = useState({ title: '', date: '', amount: '' });
    const handleTitle = (event) => {
        setForm((prevState) => {
            return { ...prevState, title: event.target.value };
        })
    }
    const handleDate = (event) => {
        setForm((prevState) => {
            return { ...prevState, date: event.target.value };
        })
    }
    const handleAmount = (event) => {
        setForm((prevState) => {
            return { ...prevState, amount: event.target.value };
        })
    }
    const handleClick = () => {
        console.log(form);
    }

    return (
        <form>
            <div className='new_subscription_controls'>
                <div className='new_subscription_control'>
                    <label>Title</label>
                    <input type='text' onChange={handleTitle} value={form.title} />
                </div>
                <div className='new_subscription_control'>
                    <label>Date</label>
                    <input type='date' onChange={handleDate} value={form.date} />
                </div>
                <div className='new_subscription_control'>
                    <label>Amount</label>
                    <input type='number' min='10' max='5000' onChange={handleAmount} value={form.amount} />
                </div>
            </div>
            <div className='new_subscription_actions'>
                <button type='button' onClick={handleClick}>Click me </button>
            </div>
        </form>
    )
}

export default FormSubscription