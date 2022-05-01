import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import { logout } from '../services/AuthService'

const Navbar = () => {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        return navigate('/login');
    }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-color">
            <div className="container-fluid">
                <Link to="/" className='navbar-brand'>HomeBanking</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    {!localStorage.getItem('token') ? (
                        <li className="nav-item">
                            <Link className='nav-link' to="/login">Login</Link>
                        </li>
                    ): (
                        <li className='nav-item'>
                            <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                        </li>
                    )}
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar