import './App.css';
import Header from './components/Header/Header';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router';
import MainHome from './components/MainHome';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/mainHome" element={<MainHome />} />
        <Route path="/events" element={<Events />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound></NotFound>}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
