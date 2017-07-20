import React from 'react'

const SortButtons = (props)=> {
  console.log('sort', props);

  return (
    <aside>
      <p>Relevance</p>
      <input type='submit' value='up' />
      <input type='submit' value='down' />
      <p>Score</p>
      <input type='submit' value='up' />
      <input type='submit' value='down' />
    </aside>
  )
}

export default SortButtons
