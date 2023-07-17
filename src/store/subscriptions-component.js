import { createContext, useState } from "react";


const SubscriptionContext = createContext();
const SubscriptionContextProvider = (props) => {
    const INITIAL_SUBSCRIPTION = [{
        id: '1',
        date: new Date('2023', '06', '29'),
        title: 'Monthly subscription',
        amount: '124.90',
    },
    {
        id: '2',
        date: new Date('2020', '06', '29'),
        title: 'Yearly subscription',
        amount: '154.90',
    },
    {
        id: '3',
        date: new Date('2021', '06', '29'),
        title: 'Quartly subscription',
        amount: '924.90',
    }];
    const [subscriptions, setSubscriptions] = useState(INITIAL_SUBSCRIPTION);
    return (
        <SubscriptionContext.Provider value={[subscriptions, setSubscriptions]}>
            {props.children}
        </SubscriptionContext.Provider>
    )
}
export { SubscriptionContextProvider, SubscriptionContext };