import React from 'react'
import Subscription from './Subscription';

function SubscriptionList({ filteredData }) {

    if (filteredData.length === 0) return <center><h1 style={{ color: 'darkBlue', border: '1px dashed red' }}>No Subscriptions for this year</h1></center>
    return (
        <div style={{ margin: '1%' }}>
            {filteredData.map((data) => {
                return (
                    <Subscription key={data.id} date={data.date} title={data.title} amount={data.amount} />
                )
            })}
        </div>
    )
}

export default SubscriptionList;