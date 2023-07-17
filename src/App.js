import './App.css';
import NewSubscription from './newSubscription/NewSubscription';
import Filter from './subscriptions/Filter';
import { useContext, useState } from 'react';
import SubscriptionList from './subscriptions/SubscriptionList';
import SubscriptionChart from './subscriptions/SubscriptionChart';
import { SubscriptionContext } from './store/subscriptions-component';

function App() {
  const [filtered, setFiltered] = useState(localStorage.getItem('filteredYear') || '2021');
  // const INITIAL_SUBSCRIPTION = [{
  //   id: '1',
  //   date: new Date('2023', '06', '29'),
  //   title: 'Monthly subscription',
  //   amount: '124.90',
  // },
  // {
  //   id: '2',
  //   date: new Date('2020', '06', '29'),
  //   title: 'Yearly subscription',
  //   amount: '154.90',
  // },
  // {
  //   id: '3',
  //   date: new Date('2021', '06', '29'),
  //   title: 'Quartly subscription',
  //   amount: '924.90',
  // }];
  // // const [subscriptions, setSubscriptions] = useState(INITIAL_SUBSCRIPTION);
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
  // let connect = <center><h1 style={{ color: 'darkBlue', border: '1px dashed red' }}>No Subscriptions for this year</h1></center>;
  // if (filteredArray.length != 0) {
  //   connect = filteredArray.length === 0 ? <center><h1 style={{ color: 'darkBlue', border: '1px dashed red' }}>No Subscriptions for this year</h1></center> : filteredArray.map((data) => {
  //     return (
  //       <Subscription key={data.id} date={data.date} title={data.title} amount={data.amount} />
  //     )
  //   });
  // }

  return (
    <div>
      <NewSubscription addNewSubscription={addNewSubscription} />
      <Filter filteredData={filteredData} valueOfFilter={filtered} />
      <SubscriptionChart filteredDataa={filteredArray} />
      <SubscriptionList filteredDataa={filteredArray} />


      {/* {filteredArray.length === 0 ? <center><h1 style={{ color: 'darkBlue', border: '1px dashed red' }}>No Subscriptions for this year</h1></center> : filteredArray.map((data) => {
        return (
          <Subscription key={data.id} date={data.date} title={data.title} amount={data.amount} />
        )
      })} */}
      {/* 2nd approach */}
      {/* {filteredArray.length === 0 && <center><h1 style={{ color: 'darkBlue', border: '1px dashed red' }}>No Subscriptions for this year</h1></center> || filteredArray.map((data) => {
        return (
          <Subscription key={data.id} date={data.date} title={data.title} amount={data.amount} />
        )
      })} */}
    </div>


  );
}

export default App;
