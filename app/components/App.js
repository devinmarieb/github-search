import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Repos from './Repos'
import SortButtons from './SortButtons'
import '../../styles/styles'

injectTapEventPlugin();


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      searchWord: '',
      languageWord: '',
      sortWord: 'stars',
      orderWord: 'desc',
      results: []
    }
  }

  showGitHubResponse() {
    let gitHubRequest = (`https://api.github.com/search/repositories?q=${this.state.searchWord}+language:${this.state.languageWord}&sort=${this.state.sortWord}&order=${this.state.orderWord}`)
    fetch(gitHubRequest).then((response)=> {
      return response.json()
    })
    .then((response)=> {
      this.setState({ results: response.items })
      console.log(response)
    })
  }

  sortByScore(e) {
    // let order
    this.setState({ sortWord: 'score' })
    e.target.value === 'up' ? this.setState({ orderWord: 'asc' }) : this.setState({ orderWord: 'desc' })
    // let gitHubRequest = (`https://api.github.com/search/repositories?q=${this.state.searchWord}+language:${this.state.languageWord}&sort=score&order=${order}`)
    // fetch(gitHubRequest).then((response)=> {
    //   return response.json()
    // })
    // .then((response)=> {
    //   this.setState({ results: response.items })
    // })
  }

  sortByStars(e) {
    // let order
    this.setState({ sortWord: 'stars' })
    e.target.value === 'up' ? this.setState({ orderWord: 'asc' }) : this.setState({ orderWord: 'desc' })
    // let gitHubRequest = (`https://api.github.com/search/repositories?q=${this.state.searchWord}+language:${this.state.languageWord}&sort=stars&order=${order}`)
    // fetch(gitHubRequest).then((response)=> {
    //   return response.json()
    // })
    // .then((response)=> {
    //   this.setState({ results: response.items })
    // })
  }

  showListInformation() {
    if(this.state.results.length !== 0) {
      return (
        <p>Top 30 Results</p>
      )
    }
  }

  render() {
    return (
      <section>
        <aside>
          <MuiThemeProvider>
            <TextField
              className='search-field'
              hintText= 'ex: Games'
              floatingLabelText='Project Type (Required)'
              value={ this.state.searchWord } onChange={ (e) => this.setState({ searchWord: e.target.value }) }
            />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <TextField
              className='language-field'
              hintText= 'ex: JavaScript'
              floatingLabelText='Language (Optional)'
              value={ this.state.languageWord } onChange={ (e) => this.setState({ languageWord: e.target.value }) }
            />
          </MuiThemeProvider>
          <SortButtons
            searchResult={ this.state.searchWord }
            languageResult={ this.state.languageWord }
            scoreFunc={ (e)=> this.sortByScore(e) }
            starFunc={ (e)=> this.sortByStars(e) }
          />
          <input className='submit-button' type='submit' value='Go' onClick={ ()=> this.showGitHubResponse() } disabled={ !this.state.searchWord } />
        </aside>
        <aside className='results-list'>
          {this.showListInformation()}
          <Repos ghrepos={this.state.results} />
        </aside>
      </section>
    )
  }
}
