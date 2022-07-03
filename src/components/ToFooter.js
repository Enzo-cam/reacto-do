import React from "react";
import './styles/Footer.css'
import { SiPlatzi, SiLinkedin, SiGithub } from "react-icons/si";

function ToFooter() {
    return(
        <div className="Footer">
            <a href="https://www.linkedin.com/in/enzo-camera/" target="__blank">
                <SiLinkedin className="icon"/>
            </a>
            <a href="https://github.com/EnzoCam7" target="__blank">
                <SiGithub className="icon"/>
            </a>
        </div>
    );
}

export { ToFooter };