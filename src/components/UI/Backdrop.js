import React from "react"
import styled from "styled-components"

const StyledRoot = styled.div`
  position: absolute;
  height: 90%;
  width: 100%;

  backdrop-filter: blur(10px);
  z-index: 1;
`

export default function Backdrop() {
  return <StyledRoot></StyledRoot>
}
