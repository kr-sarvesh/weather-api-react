import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoApiOptions } from '../api'

function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null)

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          //format for the dropdown options
          //options parameter is what is displayed in the dropdown
          options: response.data.map((city) => {
            return {
              //label is what is displayed in the dropdown
              label: `${city.name} ${city.countryCode}`,
              //value is what is returned when an option is selected
              value: `value is ${city.latitude} ${city.longitude}`,
            }
          }),
        }
      })
      .catch((err) => console.error(err))
  }

  const handleOnChange = (value) => {
    setSearch(value)
    onSearchChange(value)
  }

  return (
    <AsyncPaginate
      placeholder='Search for a City'
      //debounceTimeout={600} milliseconds
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default Search
