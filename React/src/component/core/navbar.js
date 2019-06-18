import React from 'react'
import styled from 'styled-components'

const FlexNav = styled.div`
    position: sticky;
    top: 0;
`

const NavBars = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-align: center;
    background-color: #333;
    border-radius: 25px;
    justify-content: space-around;
    display: flex;
`

const Nav = styled.li`
    a{
        display: flex;
        color: white;
        padding: 10px 10px;
        margin-left: 11rem;
        text-decoration:none
    }
    a:hover{
        background-color: #111;
        border-radius: 25px;
    }
`

const NavBar = () => {
    return (
        <FlexNav >
            <NavBars >
                <Nav ><a href="#">Home</a></Nav>
                <Nav ><a href="#">Menu</a></Nav>
                <Nav ><a href="#">About</a></Nav>
            </NavBars>
        </FlexNav>
    )
}

export default NavBar

/*


    .nav a:hover {
        background-color: #111;
        border-radius: 25px;
    }
*/