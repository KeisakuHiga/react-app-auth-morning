import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import List from './components/List'
import GetCountryData from './components/GetCountryData'

class Routes extends React.Component {
  render() {
    const {countriesList} = this.props
    return (
      <Switch>
        <Route path="/list" render={() => {
          return <List countriesList={countriesList} />
        }} />
        <Route path="/country/:name" component={GetCountryData} />
        <Route path="/search" />
      </Switch>
    )
  }
}

export default Routes;