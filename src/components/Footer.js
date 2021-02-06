import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  position: sticky;
  /* left: 0;
  bottom: 0; */
  display: flex;
  align-content: center;
  justify-content: flex-end;
  background-color: #1b2226;
  height: 50px;
  width: 100%;
  color: white;
  h3 {
    padding-right: 25px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <h3>Created by Cole Williamson @ 2021</h3>
    </StyledFooter>
  );
}
