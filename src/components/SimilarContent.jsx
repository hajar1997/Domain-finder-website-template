import React from 'react'
import SearchResults from './SearchResults'
import SimilarContentSearchResults from './SimilarContentSearchResults';


const SimilarContent = () => {
  return (
    <div className='similar-content-style mt-5'>
        <div className="container">
            <h6>Similar Content</h6>
                <div className="side-by-side-search-content d-flex">
                    <SimilarContentSearchResults />
                    <SimilarContentSearchResults />
                    <SimilarContentSearchResults />
                </div>   
        </div>
    </div>
  )
}

export default SimilarContent