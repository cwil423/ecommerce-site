import React from "react"
import styled from "styled-components"
import Button from "./UI/Button"

const StyledMainBody = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px;
  align-items: center;
  border-radius: 10px;
  width: 350px;
`

const StyledInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledNameDiv = styled.div`
  display: flex;
  text-align: center;
`

const StyledImage = styled.img`
  height: 200px;
  width: 350px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const StyledDescriptionDiv = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 18px;
  height: 120px;
`

const StyledButtonArea = styled.div`
  padding-top: 15px;
`

const StyledButton = styled.button`
  /* font-family : inherit; */
  font-size: 1em;
  width: 115px;
  height: 35px;
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

export default function CameraCard(props) {
  console.log(props.info)
  return (
    <StyledMainBody>
      <StyledImage src={props.info.photourl}></StyledImage>
      <StyledInfoArea>
        <StyledNameDiv>
          <h1>{props.info.name}</h1>
        </StyledNameDiv>
        <div>
          <h3>${props.info.price.toFixed(2)}</h3>
        </div>
        <StyledDescriptionDiv>
          <p>{props.info.description}</p>
        </StyledDescriptionDiv>
      </StyledInfoArea>

      <StyledButton
        disabled={props.disabled}
        onClick={() => props.addItem(props.info)}
      >
        Add to Cart
      </StyledButton>
    </StyledMainBody>
  )
}
