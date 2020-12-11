import logo from './logo.svg';
import './App.css';
import Imnavigation from './components/imnavigation'
import Inboxmenu from './components/inboxmenu'
import Friendlist from "./components/friendlist"

function App() {
  return (
    <div className="App">
      <div style={{display:'flex',minHeight:'100vh'}}>
      <Imnavigation />
      <Inboxmenu />
      <Friendlist />
      </div>
      
      
    </div>
  );
}

export default App;
