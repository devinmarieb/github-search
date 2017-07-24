import React from 'react'

const Repos = (props)=> {

  let repoList = props.ghrepos.map((repo) => {
    return (
      <article key={repo.id} className='repo'>
        <p>
          <span className='details'>Username: </span>
          <span className='user-details'>{repo.owner.login === null ? 'N/A' : repo.owner.login}</span>
        </p>
        <p>
          <span className='details'>Repo Name: </span>
          <span className='user-details'>{repo.name === null ? 'N/A' : repo.name}</span>
        </p>
        <p>
          <span className='details'>Repo Description: </span>
          <span className='user-details'>{repo.description === null ? 'N/A' : repo.description}</span>
        </p>
        <p>
          <span className='details'>Repo Language: </span>
          <span className='user-details'>{repo.language === null ? 'N/A' : repo.language}</span>
        </p>
        <p>
          <span className='details'>Popularity: </span>
          <span className='user-details'>{repo.stargazers_count === null ? 'N/A' : repo.stargazers_count}</span>
        </p>
        <p>
          <span className='details'>Relevance: </span>
          <span className='user-details'>{repo.score === null ? 'N/A' : repo.score}</span>
        </p>
        <p>
          <span className='details'>GitHub URL: </span>
          <span className='user-details'>{repo.svn_url === null ? 'N/A' : <a href={repo.svn_url} className='link' target='blank'>{repo.svn_url}</a>}</span>
        </p>
      </article>
    )
  })

  return (
    <div className='repo-list'>
      {props.sortWord === 'score' && props.orderWord === 'asc' ? repoList.reverse() : repoList}
    </div>
  )
}

export default Repos
