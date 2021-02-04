import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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

const StyledCartButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 150px; */
`;

const StyledCartButtonText = styled.div`
  margin: 5px;
`;

const StyledCartButtonNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  color: black;
  background-color: white;
  border-radius: 100px;
  height: 18px;
  width: 18px;

  font-family: '"Roboto", sans-serif';
`;

export default function AppBar() {
  const cart = useSelector(state => state.cart);
  const [itemAmount, setItemAmount] = useState(null);

  useEffect(() => {
    let amount = 0;
    cart.forEach(element => {
      amount += element.amount;
    });
    if (amount != 0) {
      setItemAmount(amount);
    } else setItemAmount(null);
  }, [cart]);

  return (
    <div>
      <StyledSection>
        <StyledLink to="/" activeStyle={{ textDecoration: "underline" }}>
          Home
        </StyledLink>

        <StyledLink to="/Cameras" activeStyle={{ textDecoration: "underline" }}>
          Cameras
        </StyledLink>
        <StyledCartButtonDiv>
          <StyledLink to="/Cart" activeStyle={{ textDecoration: "underline" }}>
            <StyledCartButtonDiv>
              <StyledCartButtonText>{`Cart`}</StyledCartButtonText>
            </StyledCartButtonDiv>
          </StyledLink>
          {itemAmount != null ? (
            <StyledCartButtonNumber>{itemAmount}</StyledCartButtonNumber>
          ) : null}
        </StyledCartButtonDiv>
      </StyledSection>
    </div>
  );
}
