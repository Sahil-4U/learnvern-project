import React, { useContext } from 'react'
import Subscription from './Subscription';
import SubscriptionContext from '../store/subscriptions-component';

function SubscriptionList() {
    const { filteredArray: filteredData } = useContext(SubscriptionContext);

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