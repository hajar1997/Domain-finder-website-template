import React from 'react';


const AlexaPointsCheckboxes = () => {

return (

<div>
  <form className='checkbox-wrapper mt-3'>
    <label>
      <input type="checkbox" />
      5 star
    </label>
    <label>
      <input type="checkbox" checked />
      4 star
    </label>
    <label>
      <input type="checkbox" />
      3 star
    </label>
    <label>
      <input type="checkbox" />
      2 star
    </label>
    <label>
      <input type="checkbox" />
      1 star
    </label>
  </form>
</div>
)
}

export default AlexaPointsCheckboxes