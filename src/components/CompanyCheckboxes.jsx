import React from 'react';


const CompanyCheckboxes = () => {

return (

<div>
  <form className='checkbox-wrapper mt-3'>
    <label>
      <input type="checkbox" />
      Administrative
    </label>
    <label>
      <input type="checkbox" checked />
      Arts & Design
    </label>
    <label>
      <input type="checkbox" />
      Business
    </label>
    <label>
      <input type="checkbox" />
      Consulting
    </label>
    <label>
      <input type="checkbox" />
      Customer Services & Support
    </label>
  </form>
</div>
)
}

export default CompanyCheckboxes