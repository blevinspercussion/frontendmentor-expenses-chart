import './App.css';
import MyBalance from './components/MyBalance';
import Spending from './components/Spending';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <MyBalance />
        <Spending />
      </div>
    </div>
  );
}

export default App;
