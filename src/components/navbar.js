import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
 
 
export default class navbar extends Component {
    
    state = {
        isOpen: false  
      };
 
  
      handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
      };

      Logout = () =>{
        localStorage.clear();
        window.location.reload();
      }

      
    render() {

        return (
            <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to={localStorage.getItem('Username') === process.env.React_APP_ADMIN_USERNAME ? '' : '/'}>{localStorage.getItem('Username') === process.env.React_APP_ADMIN_USERNAME ? 'Deepanshu' : 'Login'}</Link>
            </li>
              <li className={localStorage.getItem('Username') === process.env.React_APP_ADMIN_USERNAME ? "show-logout" : "hide-logout"} >
              <Link  to="/" onClick={this.Logout}>Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
        )
    }
}
