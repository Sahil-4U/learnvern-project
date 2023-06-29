import './App.css';
import Subscription from './components/Subscription';

function App() {
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
  return (
    <div>
      <Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount} />
      <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount} />
      <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount} />
    </div>


  );
}

export default App;
