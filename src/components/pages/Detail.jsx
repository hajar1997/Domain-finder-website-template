import React from 'react';
import DetailPageHeader from '../DetailPageHeader';
import { Container, Row, Col } from 'reactstrap';
import '../../assets/styles/detail.css';
import DetailPageSearchResults from '../DetailPageSearchResult';
import { DomainRegistrar } from '../DomainRegistrar';
import WhoIs from '../WhoIs';

const Detail = () => {
  return (
    <div>
        <DetailPageHeader />
        <Container>
        <Row className='DetailRowLayout'>
           <Col xs="8">
            <DetailPageSearchResults />
            <DomainRegistrar />
            <WhoIs />
            </Col>
            <Col xs="4">
            
            </Col>
         </Row>
         </Container>
    </div>
  )
}

export default Detail;