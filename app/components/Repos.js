import React from 'react'

const Repos = (props)=> {

  let repoList = props.ghrepos.map((repo) => {
    return (
      <article key={ repo.id } className='repo'>
        <p><span className='details'>Username:</span> <span className='user-details'>{ repo.owner.login === null ? 'N/A' : repo.owner.login }</span></p>
        <p><span className='details'>Project Name:</span> { repo.name === null ? 'N/A' : repo.name }</p>
        <p><span className='details'>Project Description:</span> { repo.description === null ? 'N/A' : repo.description }</p>
        <p><span className='details'>Project Language:</span> { repo.language === null ? 'N/A' : repo.language }</p>
        <p><span className='details'>Popularity:</span> { repo.stargazers_count === null ? 'N/A' : repo.stargazers_count }</p>
        <p><span className='details'>Relevance:</span> { repo.score === null ? 'N/A' : repo.score }</p>
      </article>
    )
  })

  return (
    <div className='repo-list'>
      { props.sortWord === 'score' && props.orderWord === 'asc' ? repoList.reverse() : repoList }
    </div>
  )
}

export default Repos
