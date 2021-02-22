import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 75px;
  background-color: white;
`;

const StyledH2 = styled.h2`
  /* color: black; */
  margin: 0px;
  padding: 0px;
  color: #e8b741;
`;

const StyledLink = styled(props => <Link {...props} />)`
  color: #e8b741;
  text-decoration: none;
  font-size: x-large;
  @media (max-width: 600px) {
    font-size: large;
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
  background-color: #e8b741;
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
        <StyledH2>CameraStore</StyledH2>
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
