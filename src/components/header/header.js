import React,{Component} from 'react';
import logo from './logo2.png';
import bell from './bell-icon.jpg'
import './header.css';
class Header extends Component{
    render(){
        return (
          <div className="logo">
            <img src={logo} alt="logo" height="90px"/>
            <div className='head-icons'></div>
            <div className="avatar-circle head-icons">
            <span className="initials"> AB </span>
            </div>
            <img src={bell} className="head-icons" alt="bell" height="90px"/>
            
          </div>
        );
      }
}

export default Header;