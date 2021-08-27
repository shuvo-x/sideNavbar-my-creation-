import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Overview from './pages/Overview';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer/Footer';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Connection from './Connection';


function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Connection />
  
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;