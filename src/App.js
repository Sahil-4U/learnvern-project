import './App.css';
import NewSubscription from './newSubscription/NewSubscription';
import Filter from './subscriptions/Filter';
import { useContext, useState } from 'react';
import SubscriptionList from './subscriptions/SubscriptionList';
import SubscriptionChart from './subscriptions/SubscriptionChart';
import { SubscriptionContext } from './store/subscriptions-component';

function App() {
  const [filtered, setFiltered] = useState(localStorage.getItem('filteredYear') || '2021');

  const [subscriptions, setSubscriptions] = useContext(SubscriptionContext);
  const addNewSubscription = (data) => {
    setSubscriptions(prev => [data, ...prev]);
    console.log('app.js', data, subscriptions);
  }
  const filteredData = (data) => {
    setFiltered(data);
    localStorage.setItem('filteredYear', data);
  }
  const filteredArray = subscriptions.filter((data) => {
    return data.date.getFullYear().toString() === filtered;
  })

  return (
    <div>
      <NewSubscription addNewSubscription={addNewSubscription} />
      <Filter filteredData={filteredData} valueOfFilter={filtered} />
      <SubscriptionChart filteredDataa={filteredArray} />
      <SubscriptionList filteredDataa={filteredArray} />
    </div>


  );
}

export default App;
