import React from 'react';
import {Input,
Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'

function SearchInput() {
return (
<div className="wrapper mt-4">
        <Button className='dropdown-style d-flex align-items-center text-wrap' >Resources
        <FontAwesomeIcon className='ms-3' icon={faChevronDown} />
        </Button>
    <Input className='input-style w-75 text-wrap' placeholder='Search something...'/>
</div>
);

}

export default SearchInput;