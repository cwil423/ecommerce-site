import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 10px;
  margin: 25px;
`;

const StyledH2 = styled.h2`
  margin: 0;
  padding: 0;
`;

const StyledH4 = styled.h4`
  padding: 0;
  margin: 0;
`;

const StyledImg = styled.img`
  height: 200px;
  width: 350px;
  margin: 0px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  /* @media (max-width: 600px) {
    height: 160px;
    width: 280px;
  } */
  @media (max-width: 650px) {
    height: 100px;
    width: 175px;
  }
`;

const StyledInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`;

const StyledIncrementDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  align-items: center;
`;

const StyledIncrementButton = styled.button`
  /* font-family : inherit; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* font-size: 1em; */
  width: 30px;
  height: 30px;
  color: black;
  margin-left: 10px;
  margin-right: 10px;

  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`;

// const StyledButton = styled.button`
//   /* font-family : inherit; */
//   font-size: 1em;
//   width: 115px;
//   height: 35px;
//   color: white;
//   background-color: #70a37f;
//   border-radius: 4px;
//   &:hover {
//     cursor: pointer;
//     background-color: #2e5339;
//   }
//   &:active {
//     transform: translateY(1px);
//   }
// `;

export default function CheckoutCameraCard(props) {
  const dispatch = useDispatch();
  return (
    <StyledMainDiv>
      <StyledImg src={props.info.photourl}></StyledImg>

      <StyledInfoDiv>
        <StyledH2>{props.info.name}</StyledH2>
        <StyledH4>${props.info.price.toFixed(2)}</StyledH4>

        <StyledIncrementDiv>
          <StyledIncrementButton
            onClick={() => dispatch({ type: "DECREMENT", id: props.info.id })}
          >
            -
          </StyledIncrementButton>
          <StyledH4>{props.info.amount}</StyledH4>
          <StyledIncrementButton
            onClick={() => dispatch({ type: "INCREMENT", id: props.info.id })}
          >
            +
          </StyledIncrementButton>
        </StyledIncrementDiv>
        {/* <StyledButton
          onClick={() => dispatch({ type: "REMOVE", id: props.info.id })}
        >
          Remove
        </StyledButton> */}
      </StyledInfoDiv>
    </StyledMainDiv>
  );
}
