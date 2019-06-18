import React, { Component } from 'react'
import NavBar from './../core/navbar'
import Home from './home'
import {createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    background-color :bisque;
    text-decoration: none;
  }
`
class Index extends Component {
    render() {
        return (
            <div>
                <GlobalStyle whiteColor/>
                <NavBar/>
                <Home/>
            </div>
        )
    }
}

export default Index