import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';


const FiltersHeader = () => {

  return (
    <div className="filters-header-style">
        <div className="container">
            <div className="filters-wrapper">
                <div className="filter-header">
                    <h6>FILTERS</h6>
                </div>
                <div className="counts-filtered-domains">
                    <h6>Showing: 599 filtered domains</h6>
                </div>
                <div className="sorted-header d-flex align-items-center">
                <h6>Sort by : <span>Relevance</span></h6>
                <FontAwesomeIcon className='sorted-header-icon ms-3' icon={faChevronDown} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FiltersHeader