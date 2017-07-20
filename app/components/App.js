import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Repos from './Repos'
import SortButtons from './SortButtons'
import '../../styles/reset'
import '../../styles/styles'

injectTapEventPlugin();


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      searchWord: '',
      languageWord: '',
      orderWord: 'desc',
      sortWord: '',
      results: []
    }
  }

  showGitHubResponse() {
    let gitHubRequest = (`https://api.github.com/search/repositories?q=${this.state.searchWord}+language:${this.state.languageWord}&sort=${this.state.sortWord}&order=${this.state.orderWord}`)
    fetch(gitHubRequest).then((response)=> {
      return response.json()
    })
    .then((response)=> {
      this.setState({ results: response.items, searchWord: '', languageWord: '' })
    })
  }

  sortByGroup(e) {
    this.setState({ sortWord: e.target.value === 'score' ? 'score' : 'stars'})
  }

  sortByOrder(e) {
    this.setState({ orderWord: e.target.value === 'up' ? 'desc' : 'asc'})
  }

  showListInformation() {
    if(this.state.results.length !== 0) {
      return (
        <p className='top-results-text'>Top 30 Results</p>
      )
    }
  }

  render() {
    return (
      <section>
          <aside className='input-fields'>
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
          </aside>
          <aside className='header'>
            <SortButtons
              searchResult={ this.state.searchWord }
              languageResult={ this.state.languageWord }
              groupFunc={ (e)=> this.sortByGroup(e) }
              orderFunc={ (e)=> this.sortByOrder(e) }
            />
            <input className='submit-button' type='submit' value='Go' onClick={ ()=> this.showGitHubResponse() } disabled={ !this.state.searchWord } />
          </aside>
          {this.showListInformation()}
          <aside>
            <Repos ghrepos={this.state.results} sortWord={this.state.sortWord} orderWord={this.state.orderWord} />
          </aside>
      </section>
    )
  }
}
