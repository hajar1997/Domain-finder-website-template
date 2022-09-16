import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp,faSearch} from '@fortawesome/free-solid-svg-icons';
import {Input,Button,InputGroup,InputGroupText} from 'reactstrap';
import MetatagsCheckboxes from './MetatagsCheckboxes';

const MetatagsMenu = () => {
return (
<div>
    <div className="container">
        <div className="company-side-menu-style mt-3">
            <div className="company-menu-header">
                <h6>Metatags</h6>
                <FontAwesomeIcon className='chevron-up' icon={faChevronUp} />
            </div>
            <InputGroup className='company-input-group mt-3'>
                <InputGroupText className='company-search-icon'>
                    <FontAwesomeIcon className='search-icon' icon={faSearch} />
                </InputGroupText>
                <Input className='company-input' placeholder='Search metatag'></Input>
            </InputGroup> 
            <MetatagsCheckboxes />
        </div>
    </div>
</div>
)
}

export default MetatagsMenu