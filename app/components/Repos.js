import React from 'react'

const Repos = (props)=> {

  let repoList = props.ghrepos.map((repo) => {
    return (
      <article key={ repo.id } className='repo'>
        <p>Username: { repo.owner.login }</p>
        <p>Project Name: { repo.name }</p>
        <p>Project Description: { repo.description }</p>
        <p>Project Language: { repo.language }</p>
        <p>Stars: { repo.stargazers_count }</p>
        <p>Score: { repo.score }</p>
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
