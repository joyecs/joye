import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

function Education(props){
    return (
        <div className="container text-left">
            <strong> <i className="fas fa-graduation-cap"></i> &nbsp; Andrews University 
                <i className="fas fa-map-marker-alt"></i> &nbsp;MI, USA</strong>      
            <br></br>Major: MBA
            <br></br>Courses: Leadership, Marketing, Economics, Financial Management, etc.
            <br></br> GPA: <span className="badge badge-success">Excellent</span> <br></br><br></br>
            <ProgressBar animated now={98} variant='success'/> 
            <hr></hr>
            <strong> <i className="fas fa-graduation-cap"></i> &nbsp; Guangzhou Medical University 
            <i className="fas fa-map-marker-alt"></i> &nbsp;Guangzhou, CN</strong>
            <br></br>Major: Infomation Management and Information System     
            <br></br>Courses: C#, Java, Database, Operation System, Network Security, etc.  
            <br></br>GPA: <span className="badge badge-info">Good</span> <br></br><br></br>
            <ProgressBar animated now={75} variant="info"/> 
        </div>
    );
}
export default Education;