import React from 'react'
// import Footer from '../layouts/Footer';
import { Col, Row,Divider } from 'antd';
import SearchPageHeader from '../SearchPageHeader';
import '../../assets/styles/search.css';
import SearchPageSearchInput from '../SearchPageSearchInput';
import FiltersHeader from '../FiltersHeader';
import CompanySideMenu from '../CompanySideMenu';


const Search = () => {
return (
  <div>
    {/* <Divider orientation="left">Left</Divider> */}
  <SearchPageHeader />
  <SearchPageSearchInput />
    <Row>
      <Col flex={2}>
        <FiltersHeader />
        <CompanySideMenu />

      </Col>
      <Col flex={3}>

      </Col>
    </Row>
</div>
)
}

export default Search;