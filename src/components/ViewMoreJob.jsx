import React from 'react';
import {Container,Row,Col } from 'reactstrap';

const ViewMoreJob = () => {
return (
<div>
    <Container>
        <Row className='top-searchs mt-4'>
            <Col className='search-header'>
            <h6>Top searches: </h6>
            </Col>
            <Col className='search-topics'>
            <h6>development</h6>
            </Col>
            <Col className='search-topics'>
            <h6>agile</h6>
            </Col>
            <Col className='search-topics'>
            <h6>design</h6>
            </Col>
            <Col className='search-topics'>
            <h6>finance</h6>
            </Col>
            <Col className='search-topics'>
            <h6>startup</h6>
            </Col>
            <Col className='search-topics'>
            <h6>delivery</h6>
            </Col>
        </Row>
    </Container>
</div>
)
}

export default ViewMoreJob