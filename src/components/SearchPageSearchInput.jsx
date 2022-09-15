import React from 'react';
import {Input,Button,InputGroup,InputGroupText} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faSearch,faX} from '@fortawesome/free-solid-svg-icons';


function SearchPageSearchInput() {
return (
<div className='sp-wrapper'>
    <InputGroup>
<Button className='d-flex sp-search-button align-items-center text-wrap'>Resources
        <FontAwesomeIcon className='ms-3 sp-search-icon' icon={faChevronDown} />
    </Button>
        <Input className='sp-input-style' placeholder='Adobe' disabled></Input>
        <InputGroupText className='sp-icon-style'>
            <FontAwesomeIcon className='pe-2 me-4 x-icon' icon={faX} />
            <FontAwesomeIcon className='pe-2 search-icon' icon={faSearch} />
        </InputGroupText>
    </InputGroup>
</div>
);

}

export default SearchPageSearchInput;