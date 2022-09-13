import SideBar from './components/SideBar';
import Topbar from './components/Topbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="containerApp">
        <SideBar />
        <Home/>
      </div>
    </div>
  );
}

export default App;
