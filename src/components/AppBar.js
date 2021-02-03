import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #1b2226;
`;

const StyledH2 = styled.h2`
  margin: 0px;
  padding: 0px;
  /* color: white; */
`;

const StyledLink = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
  font-size: xx-large;
  @media (max-width: 600px) {
    font-size: x-large;
  }
`;

export default function AppBar() {
  return (
    <div>
      <StyledSection>
        <StyledLink to="/" activeStyle={{ textDecoration: "underline" }}>
          Home
        </StyledLink>

        <StyledLink to="/Cameras" activeStyle={{ textDecoration: "underline" }}>
          Cameras
        </StyledLink>

        <StyledLink to="/Cart" activeStyle={{ textDecoration: "underline" }}>
          Cart
        </StyledLink>
      </StyledSection>
    </div>
  );
}
