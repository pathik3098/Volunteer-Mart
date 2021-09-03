// Author : Pathik Kumar Patel

import React, {Component} from 'react';
import "../css/Footer.css";

class Footer extends Component{

    render(){
        return(
            <footer class="main-footer">
                <div className = "container">
                    <span className="text-muted">
                    
                    {/* Footer Bottom */}
                    <div >
                    <h5>Can we help ?</h5>
                            <ul className="list-unstyled">
                                <li>Contact Us: +1 705-913-6645</li>
                            </ul>
                        <p className="text-center">
                            &copy;{new Date().getFullYear()} Volunteer Mart - All Rights Reserved
                        </p>
                    </div>
                    </span>
                </div>
            </footer>
        )
    }
}

export default Footer;