import './App.css'
import Search from './components/Search'
import CurrentWeather from './components/current-weather/current-weather'
import { useState } from 'react'
import { WEATHER_API_KEY, WEATHER_API_URL } from './api'

function App() {
  const handleOnSearchChange = (value) => {
    console.log(value)
  }
  return (
    <>
      <div className='container'>
        <Search onSearchChange={handleOnSearchChange} />
        <CurrentWeather />
      </div>
    </>
  )
}

export default App
