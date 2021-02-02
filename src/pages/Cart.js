import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import CheckoutCameraCard from "../components/CheckoutCameraCard"
import Layout from "../components/Layout"

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 1169px;
  padding-top: 25px;
  padding-bottom: 75px;
`

const StyledH2 = styled.h2`
  font-family: "Roboto", sans-serif;
`

const StyledH3 = styled.h3`
  margin: 0px;
  padding: 10px;
`

const StyledItemsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
`
const StyledCartTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledCheckoutButton = styled.button`
  width: 200px;
  height: 40px;
  font-size: 1em;
  color: white;
  background-color: #70a37f;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    background-color: #2e5339;
  }
  &:active {
    transform: translateY(1px);
  }
`
const StyledItemsAndTotalDiv = styled.div`
  display: flex;
  justify-content: space-around;
`

const StyledTotalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 15%;
  border-radius: 10px;
  margin-top: 25px;
`

const StyledTotalItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 500px;
`

const StyledNameAndPriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
`

export default function Cart() {
  const cart = useSelector(state => state.cart)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let total = 0
    cart.forEach(element => {
      total +=
        parseFloat(element.price.replace(/,/g, "").substring(1)).toFixed(2) *
        element.amount
    })
    setTotal(total)
  }, [cart])

  return (
    <Layout>
      <StyledRoot>
        <StyledCartTitleDiv>
          <h1>Your Cart</h1>
          {cart.length === 0 && <h2>Your cart is currently empty.</h2>}
        </StyledCartTitleDiv>
        <StyledItemsAndTotalDiv>
          <StyledItemsDiv>
            <StyledCartTitleDiv></StyledCartTitleDiv>
            {cart.length > 0 &&
              cart.map(item => (
                <CheckoutCameraCard key={cart.indexOf(item)} info={item} />
              ))}
          </StyledItemsDiv>
          {cart.length != 0 && (
            <StyledTotalDiv>
              {cart.map(item => (
                <StyledTotalItemDiv>
                  <StyledNameAndPriceDiv>
                    <StyledH3>{item.name}</StyledH3>
                    <StyledH3>{item.price}</StyledH3>
                  </StyledNameAndPriceDiv>

                  <StyledH3>{item.amount}</StyledH3>
                  <StyledH3>
                    $
                    {(
                      parseFloat(item.price.replace(/,/g, "").substring(1)) *
                      item.amount
                    ).toFixed(2)}
                  </StyledH3>
                </StyledTotalItemDiv>
              ))}
              <StyledH2>Total: ${total}</StyledH2>

              <StyledCheckoutButton>Checkout</StyledCheckoutButton>
            </StyledTotalDiv>
          )}
        </StyledItemsAndTotalDiv>

        {/* <StyledCheckoutAreaDiv></StyledCheckoutAreaDiv> */}
      </StyledRoot>
    </Layout>
  )
}
