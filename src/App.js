import React from 'react'
import Routes from './routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './styles/theme'

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Routes />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
