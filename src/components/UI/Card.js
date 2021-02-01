import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 350px;
  height: 350px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: white;
`

export default function Card(props) {
  return <StyledDiv>{props.children}</StyledDiv>
}
