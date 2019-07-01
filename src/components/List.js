import React from 'react';
import { Link } from 'react-router-dom'

const renderCountries = (countryList) => {
  return countryList.map((country, index) => {
    return <Link key={index} to={`/country/${country.name}`}><h1>{country.name}</h1></Link>
  })
}

const List = (props) => {
  const {countriesList} = props
  const result = renderCountries(countriesList)
  return (
    <div>
      {result}
    </div>
  )
}

export default List;