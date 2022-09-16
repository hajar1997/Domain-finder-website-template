import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp,faSearch} from '@fortawesome/free-solid-svg-icons';
import {Input,Button,InputGroup,InputGroupText} from 'reactstrap';
import Checkboxes from './Checkboxes';

const CompanySideMenu = () => {
return (
<div>
    <div className="container">
        <div className="company-side-menu-style">
            <div className="company-menu-header">
                <h6>Company Sectors</h6>
                <FontAwesomeIcon className='chevron-up' icon={faChevronUp} />
            </div>
            <InputGroup className='company-input-group'>
                <InputGroupText className='company-search-icon'>
                    <FontAwesomeIcon className='search-icon' icon={faSearch} />
                </InputGroupText>
                <Input className='company-input' placeholder='Search sector'></Input>
            </InputGroup> 
            <Checkboxes />
        </div>
    </div>
</div>
)
}

export default CompanySideMenu