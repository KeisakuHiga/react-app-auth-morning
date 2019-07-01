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
      // const token = localStorage.getItem('token')
      const authentication = await axios.get('http://localhost:5000/user/current-user', {headers: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoid2FkZSIsImlhdCI6MTU2MTk0NzQyMywiZXhwIjoxNTYyNTUyMjIzfQ.Qz5bbSiT4i7mfC9zZXNswc6SF30V-psW-84RZe8gLCA" }})
      console.log(authentication)
      this.setState({
        countriesList: response.data,
        authentication: true
      })
    } catch(err) {
      console.log(err)
      const response = await axios.get('https://restcountries.eu/rest/v2/all')
      this.setState({
        countriesList: response.data,
        authentication: false
      })
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