import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  position: sticky;
  display: flex;
  /* align-content: center; */
  align-items: center;
  justify-content: flex-end;
  background-color: #1b2226;
  height: 65px;
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
