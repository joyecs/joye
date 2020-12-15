import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap, faRibbon, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Education(props){
    const University = <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>;
    const certifica = <FontAwesomeIcon icon={faRibbon}></FontAwesomeIcon>
    const my_map = <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>
    return (
        <div className="container text-left">
            <strong> {University} &nbsp; Andrews University &nbsp;&nbsp;&nbsp;&nbsp;
                {my_map} &nbsp;MI, USA</strong>      
            <br></br>Major: MBA
            <br></br>Major Courses: Leadership, Marketing, Economics, Financial Management, etc.
            <br></br> GPA: <span className="badge badge-success">Excellent</span> <br></br><br></br>
            <ProgressBar animated now={98} variant='success'/> 
            <hr></hr>
            <strong> {University} &nbsp; Guangzhou Medical University &nbsp;&nbsp;&nbsp;&nbsp;
            {my_map}&nbsp;Guangzhou, CN</strong>
            <br></br>Major: Infomation Management and Information System     
            <br></br>Major Courses: C#, Java, Database, Operation System, Network Security, etc.  
            <br></br>GPA: <span className="badge badge-info">Good</span> <br></br><br></br>
            <ProgressBar animated now={75} variant="info"/> 
            <hr></hr>
            <strong>{certifica}&nbsp; Certification:</strong>
            <br></br><strong>Intermediate Software Developer</strong>
            <br></br>Ministry of Information Industry
            <br></br>Issued date: Sep 2015 No Expiration Date
            <br></br>Credential ID: <a href="https://query.ruankao.org.cn/certificate/main" target="_blank">15218440055</a>
        </div>
    );
}
export default Education;