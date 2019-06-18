import React, { Component } from 'react'
import styled from 'styled-components'
import Form from '../core/form'
import MenuBar from '../core/menu'

const BG = styled.div`
    max-width: 100%;
    min-height: 100%;
    border-radius: 25px;
    background-color: #111;
    display:flex;
`

class home extends Component {
    state={
        menus :['apple','banana','cake','apple','banana','cake','apple','banana','cake','apple','banana','cake','apple','banana','cake']
    }
    render() {
        return (
            <BG>
                <Form/>
                <MenuBar menus={this.state.menus}/>
            </BG>
        )
    }
}

export default home

