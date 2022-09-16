import React from 'react';
import {Input,Button,InputGroup,InputGroupText} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faSearch} from '@fortawesome/free-solid-svg-icons';



function DetailPageSearchInput() {
return (
<div className="detail-search-input-wrapper">
    <Button className='detail-dropdown-style d-flex align-items-center text-wrap'>Resources
        <FontAwesomeIcon className='ms-3' icon={faChevronDown} />
    </Button>
    <InputGroup className='detail-input-group'>
        <Input className='detail-input-style' placeholder='Search something...'></Input>
        <InputGroupText className='detail-input-text-style'>
            <FontAwesomeIcon  className='pe-2' icon={faSearch} />
        </InputGroupText>
    </InputGroup>
</div>
);

}

export default DetailPageSearchInput;