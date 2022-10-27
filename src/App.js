import './App.css';
import Header from './components/Header/Header';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router';
import MainHome from './components/MainHome';
import Login from './components/Login/Login';
import OtherLogin from './components/Others/OhterLogin';
import SignUp from './components/SignUp/SignUp';
import Membership from './components/Membership/Membership';
import Gallery from './components/Gallery/Gallery';
import RequireAuth from './components/RequireAuth/RequireAuth';
import AboutUs from './components/AboutUs/AboutUs';
import ShowMember from './components/ShowMember/ShowMember';
// import Panel from './components/Panel/Panel';
import MainPanel from './components/MainPanel/MainPanel';
import NewsFeed from './components/NewsFeed/NewsFeed';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/mainHome" element={<MainHome />} />
        <Route path="/events" element={
          <RequireAuth>
            <Events></Events>
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/mems" element={<ShowMember />} />
        <Route path="/otherlogin" element={<OtherLogin />} />
        <Route path="/signUp" element={<SignUp />} />
        {/* <Route path="/panel" element={<Panel />} /> */}
        <Route path="/mainPanel" element={<MainPanel />} />
        <Route path="/newsFeed" element={<NewsFeed />} />
        {/* <Route path="/panel/:id" element={<Panel />} /> */}
        {/* <Route path="/addMembers/:id" element={<Panel />} /> */}
        <Route path="/gallery" element={
          <RequireAuth>
            <Gallery />
          </RequireAuth>

        } />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* <Route path="*" element={<NotFound></NotFound>}></Route>  */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
