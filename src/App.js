import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
//import Maindash from './components/Pages/MainDash/Maindash';
import RightSide from './components/RightSide/RightSide';
//import Main from './components/Pages/MainDash/Main';
import AppContent from './components/AppContent/AppContent';

function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
        <Sidebar />
        <AppContent/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
