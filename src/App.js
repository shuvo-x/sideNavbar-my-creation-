import { BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import InterGate from './interGatePages/InterGate';
import Navbar2 from './components-2/Navbar2/Navbar2';

function App() {
  return (
    <>
    
    
    <Router>
     <Navbar2 />
      <Switch>
    
      </Switch>
     
    </Router>
    
    
    
    </>
  );
}

export default App;
