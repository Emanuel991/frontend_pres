import Home from './components/Home'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="App">
       <Router>
       <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={localStorage.getItem('token') ? <Navigate replace to='/' /> : <LoginForm />} />
        </Routes>
      </Router> 
      </div>
    </UserProvider>
  );
}

export default App;
