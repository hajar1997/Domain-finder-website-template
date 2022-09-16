import React from 'react';


const CountryCheckboxes = () => {

return (

<div>
  <form className='checkbox-wrapper mt-3'>
    <label>
      <input type="checkbox" />
      Worldwide
    </label>
    <label>
      <input type="checkbox" checked />
      United States
    </label>
    <label>
      <input type="checkbox" />
      Azerbaijan
    </label>
    <label>
      <input type="checkbox" />
      Russia
    </label>
    <label>
      <input type="checkbox" />
      Turkey
    </label>
  </form>
</div>
)
}

export default CountryCheckboxes