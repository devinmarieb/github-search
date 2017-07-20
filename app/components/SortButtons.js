import React from 'react'

const SortButtons = (props)=> {

  return (
    <aside className='radio-sort-buttons'>
      <p className='optional'>Optional Sort: If none selected, results are sorted by most relevant</p>
      <p className='sort-text'>Most</p>
      <input className='radio' type='radio' value='up' name='order-by' onClick={ props.orderFunc} />
      <p className='sort-text'>Least</p>
      <input className='radio' type='radio' value='down' name='order-by' onClick={ props.orderFunc } />
      <p className='sort-text sort-divider'>Relevant</p>
      <input className='radio' type='radio' value='score' name='sort-by' onClick={ props.groupFunc } />
      <p className='sort-text'>Popular</p>
      <input type='radio' value='stars' name='sort-by' onClick={ props.groupFunc } />
    </aside>
  )
}

export default SortButtons
