import React from 'react'
import FormSubscription from './FormSubscription'

function NewSubscription({ addNewSubscription }) {
    const onSaveHandler = (data) => {
        const subscriptionData = { ...data, id: Math.random().toString() }
        addNewSubscription(subscriptionData);
    }
    return (
        <div className='new_subscription'><FormSubscription onSave={onSaveHandler} /> </div>
    )
}

export default NewSubscription