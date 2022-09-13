import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTwitter,faFacebook,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {Container,Row,Col } from 'reactstrap';


const Footer = () => {
  return (
    <div>
        <hr />
        <footer>
            <Container>
                <Row>
                    <Col>
                        <div className="icons-of-footer">
                        <FontAwesomeIcon className='icon-brand twitter' icon={faTwitter} />
                        <FontAwesomeIcon className='icon-brand facebook' icon={faFacebook} />
                        <FontAwesomeIcon className='icon-brand linkedin' icon={faLinkedin} />
                            </div>                    
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </footer>
    </div>
  )
}

export default Footer