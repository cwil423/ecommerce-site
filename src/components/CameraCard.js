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

const StyledNameH1 = styled.h1`
  /* margin: 10px; */
`

const StyledImage = styled.img`
  height: 200px;
  width: 350px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const StyledPriceDiv = styled.div``

const StyledPriceH2 = styled.h2`
  /* margin: 5px; */
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

export default function CameraCard(props) {
  console.log(props.info)
  return (
    <StyledMainBody>
      <StyledImage src={props.info.photourl}></StyledImage>
      <StyledInfoArea>
        <StyledNameDiv>
          <StyledNameH1>{props.info.name}</StyledNameH1>
        </StyledNameDiv>
        <StyledPriceDiv>
          <StyledPriceH2>{props.info.price}</StyledPriceH2>
        </StyledPriceDiv>

        <StyledDescriptionDiv>
          <p>{props.info.description}</p>
        </StyledDescriptionDiv>
      </StyledInfoArea>
      <StyledButtonArea>
        <Button>Add to Cart</Button>
      </StyledButtonArea>
    </StyledMainBody>
  )
}
