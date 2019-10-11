import React,{Component} from 'react';
import './footer.css';
class Footer extends Component{
    render(){
        return (
            <div className="footer_container">
                <div className="footer">
                    <p>Copyright@2019 White Panda Media Pvt. Ltd. <br/>All Rights Reserved</p>
                    <div className="container">
                        <a href="#link">Privacy Policy</a>
                        <a href="#link">Terms of service</a>
                        <a href="#link">Service Agreement</a>
                        <a className="last_link" href="#link">Contact Us</a>
                    </div>
                </div>
            </div>
        );
      }
}

export default Footer;