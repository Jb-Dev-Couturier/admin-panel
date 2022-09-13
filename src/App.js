import SideBar from './components/SideBar';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="containerApp">
        <SideBar />
        <div className="others">other pages</div>
      </div>
    </div>
  );
}

export default App;
