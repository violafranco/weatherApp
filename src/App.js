import React, { useState } from 'react';
import styled from 'styled-components';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';

const App = () => {

  const [state, setState] = useState({
    temperature: '',
    description: '',
    humidity: '',
    wind_speed: '',
    city: '',
    country: '',
    error: null
  });

  const getWeather = async e => {
    e.preventDefault();
    let { city, country } = e.target.elements;
    let cityValue = city.value;
    let countryValue = country.value;

    if(cityValue && countryValue){
      //&units=metrics para grados celsius
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}, ${countryValue}&appid=0fc2ace5a80c8c576638afaf970288e0&units=metric&lang=es`
  
      const response = await fetch(API_URL);
      const data = await response.json()
  
      setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        error: null
      })
    } else {
      setState({
        error: 'Por favor, complete ambos campos'
      })
    }

  }

  return ( 
    <Container>
      <WeatherForm getWeather={getWeather}/>
      <WeatherInfo state={state}/>
    </Container>
   );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5%;
`
 
export default App;
