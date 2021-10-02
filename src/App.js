import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from '../src/user/user.json';
import './App.css';
 
function App() {
  return (
    <div className="App">
      <h1>GOIT React homework1</h1>
      <h2>👤Social Profile</h2>
      <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <h2>📥Upload Statistics</h2>
      <Statistics items={statisticalData }/>
      <h2>❤️Friend list</h2>
      <FriendList items={ friends}/>

    </div>
  );
};

export default App;
