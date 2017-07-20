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
      results: []
    }
  }

  showGitHubResponse() {
    let gitHubRequest = (`https://api.github.com/search/repositories?q=${this.state.searchWord}+language:${this.state.languageWord}&sort=stars&order=desc`)
    fetch(gitHubRequest).then((response)=> {
      return response.json()
    })
    .then((response)=> {
      this.setState({ results: response.items })
      console.log(response)
    })
  }

  showSortButtons() {
    if(this.state.results.length !== 0) {
      return (
        <SortButtons searchResult={ this.state.searchWord } languageResult={ this.state.languageWord } />
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
              floatingLabelText='Project Type'
              value={ this.state.searchWord } onChange={ (e) => this.setState({ searchWord: e.target.value }) }
            />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <TextField
              className='language-field'
              hintText= 'ex: JavaScript'
              floatingLabelText='Language'
              value={ this.state.languageWord } onChange={ (e) => this.setState({ languageWord: e.target.value }) }
            />
          </MuiThemeProvider>
          <input className='submit-button' type='submit' value='Go' onClick={ ()=> this.showGitHubResponse() } disabled={ !this.state.searchWord || !this.state.languageWord } />
        </aside>
        <aside>
          {this.showSortButtons()}
          <Repos ghrepos={this.state.results} />
        </aside>
      </section>
    )
  }
}
