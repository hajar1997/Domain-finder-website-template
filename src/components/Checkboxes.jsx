import React from 'react';
import {FormGroup,Label,Input} from 'reactstrap';

const Checkboxes = () => {


return (

<div>
<FormGroup className="checkbox-wrapper mt-3" check>
          <Label check className='custom-control-label'>
            <Input className='custom-control-input' type="checkbox" />{' '}
            Administrative
          </Label>
          <Label check className='custom-control-label'>
            <Input className='custom-control-input' type="checkbox" />{' '}
            Arts & Design
          </Label>
          <Label check className='custom-control-label'>
            <Input className='custom-control-input' type="checkbox" />{' '}
            Business
          </Label>
          <Label check className='custom-control-label'>
            <Input className='custom-control-input' type="checkbox" />{' '}
            Consulting
          </Label>
          <Label check className='custom-control-label'>
            <Input className='custom-control-input' type="checkbox" />{' '}
            Customer Services & Support
          </Label>
        </FormGroup>
</div>
)
}

export default Checkboxes