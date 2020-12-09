import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import joye from '../images/profile2.jpeg';
import job from '../images/frontend.png';
import dream from '../images/dream.jpg';
import cats from '../images/card4.jpg';
import { Card } from 'react-bootstrap';
import cv_file from '../images/Resume.pdf';
// Font awesome
import ReactDOM from 'react-dom'
//Import all icons by using the prefix:
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faPortrait, faPhone, faMap } from '@fortawesome/free-solid-svg-icons'

library.add(fas, fab)

function Home(){
    const element = <FontAwesomeIcon icon={faGithub} size='2x'/>;
    const linkedin = <FontAwesomeIcon icon={faLinkedin} size='2x'/>;
    const gmail = <FontAwesomeIcon icon={faEnvelope} className="left_logo" />;
    const cv = <FontAwesomeIcon icon={faPortrait} size='2x'/>;
    const phone_icon = <FontAwesomeIcon icon={faPhone} className="left_logo"/>;
    const map_icon = <FontAwesomeIcon icon={faMap} className="left_logo"/>;
    return(     
        <Container>
            <Row>
                <Col xs='12' sm='12' md={6} lg={3}>
                    <Card>
                        <Card.Img varient='top' src={joye} className='card_img'>
                        </Card.Img>
                        <Card.Title>
                           Joye Zhang
                        </Card.Title>
                        <Card.Text>
                        You can also call me Min. That's my Chinese name. I am from
                          Guangdong Province of China.
                        </Card.Text>
                        <Card.Link>
                                
                        </Card.Link>
                    </Card>
                </Col>
               <Col xs='12' sm='12' md={6} lg={3}>
                    <Card>
                        <Card.Img varient='top' src={job} className='card_img'>
                        </Card.Img>
                        <Card.Title>
                        Frontend Developer
                        </Card.Title>
                        <Card.Text>
                        I love my job for now, still
                          learning
                          from my team and exploring posibilities.
                        </Card.Text>
                        <Card.Link>
                                
                        </Card.Link>
                    </Card>
                </Col>
                <Col xs='12' sm='12' md={6} lg={3}>
                    <Card>
                        <Card.Img varient='top' src={dream} className='card_img'>
                        </Card.Img>
                        <Card.Title>
                        Dream Chaser
                        </Card.Title>
                        <Card.Text>
                        It takes action and ongoing efforts to achieve our dreams. I believe I can make it!
                        </Card.Text>
                        <Card.Link>
                                
                        </Card.Link>
                    </Card>
                </Col>
                <Col xs='12' sm='12' md={6} lg={3}>
                    <Card>
                        <Card.Img varient='top' src={cats} className='card_img'>
                        </Card.Img>
                        <Card.Title>
                        Miscellaneous
                        </Card.Title>
                        <Card.Text>
                            Outdoor person. Both cat people and dog people. It's lovely to touch a warm and fuzzy thing!
                        </Card.Text>
                        <Card.Link>
                                
                        </Card.Link>
                    </Card>
                </Col>
            </Row>
            <Row>
                <div className="info_list">{gmail}  &nbsp;joyee816@gmail.com</div>
                <div className="info_list">{phone_icon} &nbsp;&nbsp; &nbsp; (269)362-0864&nbsp;&nbsp; &nbsp;</div>
                <div className="info_list">{map_icon} &nbsp;Los Angeles, CA. USA</div>
            </Row>
            <Row className="mg-top">
                <Col>
                <a href="https://github.com/minimisgo" target="_blank" className="font_icon">{element}</a>
                <a href="https://www.linkedin.com/in/joyezhang/" target="_blank" className="font_icon">{linkedin}</a>
                {/* <a href="joyee816@gmail.com" target="_blank" className="font_icon">{gmail}</a> */}
                <a href={cv_file} target="_blank" className="font_icon" >{cv}</a>
                </Col>
            </Row>
        </Container>

    );
}
export default Home