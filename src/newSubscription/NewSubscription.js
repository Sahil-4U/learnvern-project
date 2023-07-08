import React, { useState } from 'react'
import FormSubscription from './FormSubscription'
import { Button } from 'react-bootstrap';

function NewSubscription({ addNewSubscription }) {
    const [showform, setShowForm] = useState(false);
    const onSaveHandler = (data) => {
        const subscriptionData = { ...data, id: Math.random().toString() }
        addNewSubscription(subscriptionData);
        setShowForm(false);
    }
    const showformHandler = () => {
        setShowForm(!showform);
    }
    return (
        <div className='new_subscription'>
            {showform && <FormSubscription onSave={onSaveHandler} hideform={setShowForm} />}
            <div className='text-end m-3' ><Button variant='outline-warning' onClick={showformHandler}>Add new</Button></div>
        </div>
    )
}

export default NewSubscription