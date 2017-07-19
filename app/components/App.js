import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Repos from './Repos'

import '../../styles/styles'

injectTapEventPlugin();


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      search: 'games',
      language: 'javascript',
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
          <Repos ghrepos={this.state.results} />
        </aside>
      </section>
    )
  }
}
