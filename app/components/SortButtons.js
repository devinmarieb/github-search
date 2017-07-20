import React from 'react'

const SortButtons = (props)=> {

  return (
    <aside>
      <p>Sort By</p>
      <input type='radio' value='score' name='sort-by' onClick={ props.scoreFunc } />
      <input type='radio' value='stars' name='sort-by' onClick={ props.scoreFunc } />
      <p>Stars</p>
      <input type='radio' value='up' name='order-by' onClick={ props.starFunc} />
      <input type='radio' value='down' name='order-by' onClick={ props.starFunc } />
    </aside>
  )
}

export default SortButtons
