import React,{Component} from 'react';
import {TiThLargeOutline,TiZoomOutline} from "react-icons/ti";
import {FaStore} from "react-icons/fa"
import './sidebar.css';


class SideBar extends Component {
   state={
     active:'1'
   }
   handleClick = (id) => {
    console.log(id);
    this.setState({active:id})
   }
    render(){
      return (
        <ul className='side-menu-container'>
          <li  onClick={() => this.handleClick('1')} id='1' className={this.state.active==='1'?'active side-menu-item hover-bg-cyan hover-b--current b-white':'side-menu-item hover-bg-cyan hover-b--current b-white'}><TiThLargeOutline /></li>
          <li  onClick={() => this.handleClick('2')} id='2' className={this.state.active==='2'?'active side-menu-item hover-bg-cyan hover-b--current b-white':'side-menu-item hover-bg-cyan hover-b--current b-white'}><TiZoomOutline /></li>
          <li  onClick={() => this.handleClick('3')} id='3' className={this.state.active==='3'?'active side-menu-item hover-bg-cyan hover-b--current b-white':'side-menu-item hover-bg-cyan hover-b--current b-white'}><FaStore /></li>
        </ul>
      );
    }
  }
  
  export default SideBar;
