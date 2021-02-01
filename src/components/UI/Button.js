import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  /* font-family : inherit; */
  font-size: 1em;
  width: 115px;
  height: 35px;
  color: white;
  background-color: #70a37f;
  border-radius: 4px;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`

export default function Button(props) {
  return (
    <div>
      <StyledButton>{props.children}</StyledButton>
    </div>
  )
}
