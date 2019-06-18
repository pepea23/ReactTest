import React from 'react'
import styled from 'styled-components'
import Button from './button'

const Div = styled.div`
    max-width: 100rem;
    display: flex;
    justify-content: center;
    margin:10px;
`

const Form = styled.form`
    border-radius: 25px;
    background-color: #000;
    padding: 1em 10em 1em 10em;
    width: 200px;
    max-height: 350px;
    margin-top: 3.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    :hover{
        border-radius: 25px;
        background-color: rgb(68, 54, 54);
        box-shadow: 0 4px 8px 0 rgba(250, 115, 115, 0.2);
    }
        `

const form = () => {
    return (
        <Div>
            <Form>
                <h2 >Sign-Up </h2>
                <div ><span>Username</span> <input type="text" required /></div>
                <div ><span>Password </span><input type="password" required /></div>
                <div ><span>Email</span> <input type="email" required /></div>
                <Button type="submit" requied btnname={"Sign-Up"} />
            </Form>
        </Div>
    )
}

export default form