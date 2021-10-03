import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from '../src/user/user.json';
import transactions from './components/TransactionHistory/transactions.json';
import './App.css';
 
function App() {
  return (
    < div className="App">
<h1>GOIT React homework1</h1>
      <h2>👤Social Profile</h2>
      <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <h2>📥Statistics</h2>
      <Statistics title="Upload stats" stats={statisticalData}/>
      
      <h2>❤️Friend list</h2>
      <FriendList friends={friends} />
      
      <h2>💸Transactions</h2>
      <TransactionHistory items={transactions} />
      
    </div>
  );
};

export default App;
