import React from 'react';


const MetatagsCheckboxes = () => {

return (

<div>
  <form className='checkbox-wrapper mt-3'>
    <label>
      <input type="checkbox" />
      Metatag 1
    </label>
    <label>
      <input type="checkbox" checked />
      Metatag 2
    </label>
    <label>
      <input type="checkbox" />
      Metatag 3
    </label>
    <label>
      <input type="checkbox" />
      Metatag 4
    </label>
    <label>
      <input type="checkbox" />
      Metatag 5
    </label>
  </form>
</div>
)
}

export default MetatagsCheckboxes