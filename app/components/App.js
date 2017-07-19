import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      search: 'ex: Games',
      language: 'ex: JavaScript'
    }
  }

  render() {
    return (
      <section>
        <MuiThemeProvider>
          <TextField
            hintText= 'ex: Games'
            floatingLabelText='Search'
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <TextField
            hintText= 'ex: JavaScript'
            floatingLabelText='Language'
          />
        </MuiThemeProvider>
      </section>
    )
  }
}
