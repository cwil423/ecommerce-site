import React from "react"
import styled from "styled-components"

const StyledModal = styled.div`
  position: absolute;
  top: 50%; /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */
  padding: 25px;
  transform: translate(-50%, -100%);
  background-color: white;
  z-index: 2;
`

const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  font-size: 1em;
  color: white;
  background-color: #70a37f;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    background-color: #2e5339;
  }
  &:active {
    transform: translateY(1px);
  }
`

const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default function Modal(props) {
  return (
    <StyledModal>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <StyledButtonDiv>
        <StyledButton onClick={props.close}>Close</StyledButton>
      </StyledButtonDiv>
    </StyledModal>
  )
}
