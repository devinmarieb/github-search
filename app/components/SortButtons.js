import React from 'react'

const SortButtons = (props)=> {
  
  return (
    <aside>
      <p>Score</p>
      <input type='submit' value='up' onClick={ props.scoreFunc } />
      <input type='submit' value='down' onClick={ props.scoreFunc } />
      <p>Stars</p>
      <input type='submit' value='up' onClick={ props.starFunc} />
      <input type='submit' value='down' onClick={ props.starFunc } />
    </aside>
  )
}

export default SortButtons
