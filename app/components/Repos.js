import React from 'react'

const Repos = (props)=> {

  let repoList = props.ghrepos.map((repo) => {
    return (
      <article key={ repo.id } className='repo'>
        <p>Username: { repo.owner.login === null ? 'N/A' : repo.owner.login }</p>
        <p>Project Name: { repo.name === null ? 'N/A' : repo.name }</p>
        <p>Project Description: { repo.description === null ? 'N/A' : repo.description }</p>
        <p>Project Language: { repo.language === null ? 'N/A' : repo.language }</p>
        <p>Stars: { repo.stargazers_count === null ? 'N/A' : repo.stargazers_count }</p>
        <p>Score: { repo.score === null ? 'N/A' : repo.score }</p>
      </article>
    )
  })

  return (
    <div>
      { repoList }
    </div>
  )
}

export default Repos
