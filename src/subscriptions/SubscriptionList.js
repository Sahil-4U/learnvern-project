import React from 'react'
import Subscription from './Subscription';

function SubscriptionList({ filteredDataa }) {

    if (filteredDataa.length === 0) return <center><h1 style={{ color: 'darkBlue', border: '1px dashed red' }}>No Subscriptions for this year</h1></center>
    return (
        <div style={{ margin: '1%' }}>
            {filteredDataa.map((data) => {
                return (
                    <Subscription key={data.id} date={data.date} title={data.title} amount={data.amount} />
                )
            })}
        </div>

    )
}

export default SubscriptionList;