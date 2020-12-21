import React from 'react'
import "./Footer.css";
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

function Footer() {
    
    return (
        <div id="bg">
            <div className="upper">
                <p>Want to contribute? It can as small as 2 lines or big as 2 pages. Your contribution matters</p>
                <Button className='form_button' component={Link} to={"https://forms.gle/3Ynuz1rLDudMRYpf7"} target='_blank'>I'll contribute</Button>
            </div>
            <div className="lower">
                <p>
                IIITD Student Playbook &copy; 2021
                </p>
            </div>
        </div>
    )
}

export default Footer
