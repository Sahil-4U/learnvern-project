import React, { useState } from 'react';
import './FormSubscription.css'

function FormSubscription({ onSave }) {
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
    const handleSubmit = (event) => {
        event.preventDefault();
        const Subscription = { title: form.title, date: new Date(form.date), amount: form.amount };
        onSave(Subscription);
        setForm({ title: '', date: '', amount: '' });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='new_subscription_controls'>
                <div className='new_subscription_control'>
                    <label>Title</label>
                    <input type='text' onChange={handleTitle} value={form.title} required />
                </div>
                <div className='new_subscription_control'>
                    <label>Date</label>
                    <input type='date' onChange={handleDate} value={form.date} required />
                </div>
                <div className='new_subscription_control'>
                    <label>Amount</label>
                    <input type='number' min='10' max='5000' onChange={handleAmount} value={form.amount} required />
                </div>
            </div>
            <div className='new_subscription_actions'>
                <button type='submit'>Click me </button>
            </div>
        </form>
    )
}

export default FormSubscription