import './App.css';
import Subscription from './subscriptions/Subscription';
import NewSubscription from './newSubscription/NewSubscription';
import Filter from './subscriptions/Filter';
import { useState } from 'react';

function App() {
  const [filtered, setFiltered] = useState('2021');
  let subscriptions = [
    {
      id: '1',
      date: new Date('2023', '06', '29'),
      title: 'Monthly subscription',
      amount: '124.90',
    },
    {
      id: '2',
      date: new Date('2024', '06', '29'),
      title: 'Yearly subscription',
      amount: '154.90',
    },
    {
      id: '3',
      date: new Date('2025', '06', '29'),
      title: 'Quartly subscription',
      amount: '924.90',
    }
  ]
  const addNewSubscription = (data) => {
    subscriptions.push(data);
    console.log("app.js", data, subscriptions);
  }
  const filteredData = (data) => {
    setFiltered(data);
  }
  return (
    <div>
      <NewSubscription addNewSubscription={addNewSubscription} />
      <Filter filteredData={filteredData} valueOfFilter={filtered} />
      {subscriptions.map((data) => {
        return (
          <Subscription date={data.date} title={data.title} amount={data.amount} />
        )
      })}
    </div>


  );
}

export default App;
