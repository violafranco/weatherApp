import React from 'react';
import styled from 'styled-components';
import {ReactComponent as cityLogo} from './../img/cityLogo.svg';
import {ReactComponent as countryLogo} from './../img/countryLogo.svg';

const WeatherForm = ({getWeather}) => {
    return ( 
        <Container>
            <form onSubmit={getWeather}>
                <BoxOne>
                    <Image/>
                    <Input 
                    type='text' 
                    name='city' 
                    placeholder='Ingresa el nombre de tu ciudad'
                    autoFocus />
                </BoxOne>

                <BoxTwo>
                    <Image2 />
                    <Input 
                    type='text' 
                    name='country' 
                    placeholder='Ingresa el nombre de tu pais'/>
                </BoxTwo>

                <Button>Obtener el clima</Button>
            </form>
        </Container>
    );
}

const Container = styled.div`
    background-color: rgba(0, 0, 0, .6);
    width: 45%;
    height: 16em;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    box-shadow: -2px 7px 34px 3px rgba(0,0,0,0.68);
    -webkit-box-shadow: -2px 7px 34px 3px rgba(0,0,0,0.68);
    -moz-box-shadow: -2px 7px 34px 3px rgba(0,0,0,0.68);

    @media (max-width: 860px) {
        width: 75%;
    }
`

const Image = styled(cityLogo)`
    width: 5%;
    position: relative;
    top: .8em;
    left: .1em;
`
const Image2 = styled(countryLogo)`
    width: 5%;
    position: relative;
    top: .6em;
    left: .1em;
`

const BoxOne = styled.div`

`

const BoxTwo = styled.div`

`

const Input = styled.input`
    width: 30vw;
    border: 0;
    border-bottom: solid 1px white;
    outline: none;
    padding: .8em;
    background-color: transparent;
    margin: .4em;
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 1em;
    color: #e6e6e6;
    text-transform: uppercase;

    &::placeholder{
        color: #e6e6e6;
    }

    @media (max-width: 860px) {
        width: 45vw;
        padding: .4em;
    }

    @media (max-width: 500px) {
        width: 55vw;
    }
    
`

const Button = styled.button`
    width: 30%;
    margin-top: 2em;
    border: none;
    padding: 1em;
    background-color: #d94602;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    transition: all ease-in .3s;
    border-radius: 15px;

    &:hover{
        background-color: #993102;
    }

    &:active{
        transform: translateY(2px);
    }

    @media (max-width: 700px) {
        width: 40%;
        font-size: .8em;
    }

    @media (max-width: 500px) {
        font-size: .7em;
        margin-bottom: -2.5em;
    }
`
 
export default WeatherForm;