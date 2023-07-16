import React, { useReducer } from 'react';
import './FormSubscription.css'


const formReducerfn = (state, action) => {
    if (action.type === 'TITLE') {
        return { ...state, title: action.valuee };
    }
    else if (action.type === 'Date') {
        return { ...state, date: action.valuee };
    } else if (action.type === 'Amount') {
        return { ...state, amount: action.valuee };
    }
    else if (action.type === 'Reset') {
        return { ...state, title: '', amount: '', date: '' };
    }
    return state;
}
function FormSubscription({ onSave }) {
    // const [form, setForm] = useState({ title: '', date: '', amount: '' });
    const initialVal = {
        title: '', date: '', amount: ''
    }
    // let val = 'jai bholenath ji ki';
    // const [state, dispatch] = useReducer((initialState, action) => {
    //     //logic
    //     return initialState;
    // }, val);
    const [formReducer, setFormReducer] = useReducer(formReducerfn, initialVal);
    console.log('useReducer--Form', formReducer);



    const handleTitle = (event) => {
        setFormReducer({ type: 'TITLE', valuee: event.target.value });
        // setForm((prevState) => {
        //     return { ...prevState, title: event.target.value };
        // })
    }
    const handleDate = (event) => {
        setFormReducer({ type: 'Date', valuee: event.target.value });
        // setForm((prevState) => {
        //     return { ...prevState, date: event.target.value };
        // })
    }
    const handleAmount = (event) => {
        setFormReducer({ type: 'Amount', valuee: event.target.value });
        // setForm((prevState) => {
        //     return { ...prevState, amount: event.target.value };
        // })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const Subscription = { title: formReducer.title, date: new Date(formReducer.date), amount: formReducer.amount };
        onSave(Subscription);
        setFormReducer({ type: 'Reset' });
        // setForm({ title: '', date: '', amount: '' });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='new_subscription_controls'>
                <div className='new_subscription_control'>
                    <label>Title</label>
                    <input type='text' onChange={handleTitle} value={formReducer.title} required />
                </div>
                <div className='new_subscription_control'>
                    <label>Date</label>
                    <input type='date' onChange={handleDate} value={formReducer.date} required />
                </div>
                <div className='new_subscription_control'>
                    <label>Amount</label>
                    <input type='number' min='10' max='5000' onChange={handleAmount} value={formReducer.amount} required />
                </div>
            </div>
            <div className='new_subscription_actions'>
                <button type='submit'>Click me </button>
            </div>
        </form>
    )
}

export default FormSubscription