import React,{Component} from 'react';
import './social_footer.css';
import {FaTwitter,FaLinkedinIn,FaInstagram,FaFacebookF} from 'react-icons/fa';
class SocialFooter extends Component{
    render(){
        return (
            <div className="social_footer_container">
                <div className="social_footer">
                    <div class="container">
                        <span className="social_icon tw"><FaTwitter /></span>
                        <span className="social_icon li"><FaLinkedinIn/></span>
                        <span className="social_icon in"><FaInstagram /></span>
                        <span className="social_icon fa"><FaFacebookF /></span>
                    </div>
                </div>
            </div>
        );
      }
}

export default SocialFooter;