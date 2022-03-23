import React from 'react';
import styled, { keyframes } from 'styled-components';

const WeatherInfo = ({state}) => {
    return (
        <>
            {
                state.error &&
                <div>
                    <Error>{state.error}</Error>
                </div>
            }
            {
                state.temperature 
                ?
                <Container>
                    <Info>Temperatura: <span>{state.temperature}</span> °C</Info>
                    <Info>Descripción: <span>{state.description}</span></Info>
                    <Info>Humedad: <span>{state.humidity} %</span></Info>
                    <Info>Velocidad del viento: <span>{state.wind_speed * 2.5} KM/h</span></Info>
                    <Info>Ciudad: <span>{state.city}</span></Info>
                    <Info>País: <span>{state.country}</span></Info>
                </Container>
                :
                <SinPeticion>
                    No hay un petición aún
                </SinPeticion>
            }
        </>
    );
}

const Container = styled.div`
    background-color: rgba(0, 0, 0, .8);
    width: 45%;
    padding: 1.3em 1.8em;

    @media (max-width: 860px) {
        width: 75%;
    }
`
const Info = styled.h3`
    margin: .5em;
    font-weight: normal;
    color: rgba(212, 212, 212, .8);

    & span{
        font-weight: bold;
        font-size: 1.2em;
        color: rgb(212, 212, 212);
        margin-left: .4em;

        @media (max-width: 500px) {
            font-size: 1.2em;
        }
    }

    @media (max-width: 500px) {
       font-size: 1em;
    }
`
const shake2 = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}`

const Error = styled.h2`
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 1.2em;
    font-weight: normal;
    background-color: #c40000;
    padding: .8em;
    color: #fff;
    animation: 0.5s ${shake2} reverse;
    animation-iteration-count: 2;
`

const SinPeticion = styled.h3`
    margin-top: 1em;
    color: #fff;
    text-shadow: 0px 0px 6px rgba(0,0,0,0.88);
    font-weight: normal;
`
 
export default WeatherInfo;