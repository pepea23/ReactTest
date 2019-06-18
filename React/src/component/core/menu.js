import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    margin-top :10px;
    border-radius: 25px;
    background-color: rgb(58, 52, 52);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    min-height: 1000px;
`
const Products = styled.div`
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        padding-inline-start: 0%;
        width: 100%;
        margin: auto;
`

const Product = styled.div`
        margin-top :10px;
        width: 200px;
        height: 200px;
        margin: 3px;
        text-align:center;
        border-radius: 5px;
        background: #1c1d22;
    :hover {
        box-shadow: 0 4px 8px 0 rgba(250, 115, 115, 0.2);
        background: #292d41;
        }
`

const Menu = (props) => {
    return (
        <Div >
            <Products class="products">
                {props.menus.map((data, key) => {
                    return (
                        <Product id={key}>
                            <div >{data}</div>
                        </Product>
                    )
                })}
            </Products>
        </Div>
    )
}

export default Menu

