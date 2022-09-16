import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchPageHeader from '../SearchPageHeader';
import '../../assets/styles/search.css';
import SearchPageSearchInput from '../SearchPageSearchInput';
import FiltersHeader from '../FiltersHeader';
import CompanySideMenu from '../CompanySideMenu';
import CountrySideMenu from '../CountrySideMenu';
import MetatagsMenu from '../MetatagsMenu';
import AlexaPointsMenu from '../AlexaPointsMenu';
import ColorsMenu from '../ColorsMenu';
import  Footer  from '../layouts/Footer';
import SearchResults from '../SearchResults';


const Search = () => {
return (
<div>
  <SearchPageHeader />
  <SearchPageSearchInput />
  <Container>
    <Row className='SearchRowLayout'>
      <FiltersHeader />
      <Col xs="3" className='side-menu-mobile'>
      <CompanySideMenu />
      <CountrySideMenu />
      <MetatagsMenu />
      <AlexaPointsMenu />
      <ColorsMenu />
      </Col>
      <Col xs="9">
        <SearchResults />
        <SearchResults />
        <SearchResults />
        <SearchResults />
      </Col>
    </Row>
  </Container>
  <Footer />
</div>
)
}

export default Search;