import React from 'react'
// import Footer from '../layouts/Footer';
import SearchPageHeader from '../SearchPageHeader';
import '../../assets/styles/search.css';
import SearchPageSearchInput from '../SearchPageSearchInput';
import FiltersHeader from '../FiltersHeader';


const Search = () => {
  return (
    <div>
      <SearchPageHeader />
      <SearchPageSearchInput />
      <FiltersHeader />
      {/* <Footer /> */}
    </div>
  )
}

export default Search;