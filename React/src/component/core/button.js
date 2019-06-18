import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  background-color: burlywood;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top:5px;
`

const Button = (props) => {
    return (
        <Btn>{props.btnname}</Btn>
    )
}

export default Button