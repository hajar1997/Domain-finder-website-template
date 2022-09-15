import React from 'react';
import {Input,Button,InputGroup,InputGroupText} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faSearch} from '@fortawesome/free-solid-svg-icons'

function SearchInput() {
return (
<div className="wrapper mt-4">
    <Button className='dropdown-style d-flex align-items-center text-wrap'>Resources
        <FontAwesomeIcon className='ms-3' icon={faChevronDown} />
    </Button>
    <InputGroup>
        <Input className='input-style' placeholder='Search anything...'></Input>
        <InputGroupText className='input-text-style'>
            <FontAwesomeIcon className=' pe-2 search-icon' icon={faSearch} />
        </InputGroupText>
    </InputGroup>
</div>
);

}

export default SearchInput;