import React from 'react';


const ColorCheckboxes = () => {

return (

<div>
  <form className='checkbox-wrapper-color  mt-3'>
    <label>
      <input type="checkbox" />
      Green
    </label>
    <label>
      <input type="checkbox" checked />
      Red
    </label>
    <label>
      <input type="checkbox" />
      Yellow
    </label>
    <label>
      <input type="checkbox" />
      Blue
    </label>
    <label>
      <input type="checkbox" />
      White
    </label>
  </form>
</div>
)
}

export default ColorCheckboxes