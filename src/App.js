import SideBar from './components/SideBar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import { Routes, Route} from 'react-router-dom';
import UserList from './pages/UserList';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="containerApp">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
