import Home from './components/Home'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' component={Home}/>
            
        </Routes>
      </Router> 

      <Home />
    </div>
  );
}

export default App;
