import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Events from './components/Events/Events';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Events></Events>
    </div>
  );
}

export default App;
