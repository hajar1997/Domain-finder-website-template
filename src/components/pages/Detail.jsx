import React from 'react';
import DetailPageHeader from '../DetailPageHeader';
import { Container, Row, Col } from 'reactstrap';
import '../../assets/styles/detail.css';
import DetailPageSearchResults from '../DetailPageSearchResult';
import { DomainRegistrar } from '../DomainRegistrar';
import WhoIs from '../WhoIs';
import SimilarContent from '../SimilarContent';
import Footer from '../layouts/Footer';
import Tags from '../Tags';
import CompanySectors from '../CompanySectors';
import Colors from '../Colors';

const Detail = () => {
return (
<div>
  <DetailPageHeader />
  <Container>
    <Row className='DetailRowLayout'>
      <Col lg="8" sm="12">
      <DetailPageSearchResults />
      <DomainRegistrar />
      <WhoIs />
      </Col>
      <Col className="style-tags" lg="4" sm="12">
      <Tags />
      <CompanySectors />
      <Colors />
      </Col>
    </Row>
  </Container>
  <SimilarContent />
  <Footer />
</div>
)
}

export default Detail;