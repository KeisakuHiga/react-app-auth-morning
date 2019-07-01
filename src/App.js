import React from 'react';
import './App.css';
import Routes from './Routes';
import axios from 'axios';

class App extends React.Component {
  state = {countriesList: null, authentication: false}
  // get countries list data
  async componentDidMount() {
    try {
      const response = await axios.get('https://restcountries.eu/rest/v2/all')
      this.setState({
        countriesList: response.data
      })
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    const {countriesList, authentication} = this.state
    if (!countriesList) {
      return null
    } else {
      return (
        // pass that data to routes
        <Routes countriesList={countriesList} authentication={authentication} />
      )
    }
  }
}

export default App;