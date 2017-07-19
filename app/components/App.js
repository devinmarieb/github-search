import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import injectTapEventPlugin from 'react-tap-event-plugin'

import '../../styles/styles'

injectTapEventPlugin();


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      search: 'ex: Games',
      language: 'ex: JavaScript'
    }
  }

  componentWillMount() {
    let gitHubRequest = ('https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc')
    fetch(gitHubRequest).then((response)=> {
      return response.json()
    })
    .then((response)=> {
      console.log(response);
    })
  }

  render() {
    return (
      <section>
        <MuiThemeProvider>
          <TextField
            className='search-field'
            hintText= 'ex: Games'
            floatingLabelText='Search'
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <TextField
            className='language-field'
            hintText= 'ex: JavaScript'
            floatingLabelText='Language'
          />
        </MuiThemeProvider>
      <input className='submit-button' type='submit' value='Go'  />
      </section>
    )
  }
}
