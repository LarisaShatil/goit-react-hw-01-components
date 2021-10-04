import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics';
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
      <h1>GOIT React homework-1</h1>
      <section>
              <h2>1. Social Profile</h2>
      <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      </section>

      <Statistics title="2. Upload stats" stats={statisticalData}/>
      
      <section>
      <h2>3. Friend list</h2>
      <FriendList friends={friends} />
      </section>
      <section>
              <h2>4. Transactions 💸</h2>
      <TransactionHistory items={transactions} />
      </section>
      
    </div>
  );
};

export default App;
