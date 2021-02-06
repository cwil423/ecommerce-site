import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 10px;
  margin: 25px;

  h2 {
    margin: 0;
    padding: 0;
  }

  h4 {
    padding: 0;
    margin: 0;
  }

  img {
    height: 200px;
    width: 350px;
    margin: 0px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    @media (max-width: 650px) {
      height: 100px;
      width: 175px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: black;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
    }
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

export default function CheckoutCameraCard(props) {
  const dispatch = useDispatch();
  return (
    <StyledMainDiv>
      <img src={props.info.photourl}></img>

      <StyledInfoDiv>
        <h2>{props.info.name}</h2>
        <h4>${props.info.price.toFixed(2)}</h4>

        <StyledIncrementDiv>
          <button
            onClick={() => dispatch({ type: "DECREMENT", id: props.info.id })}
          >
            -
          </button>
          <h4>{props.info.amount}</h4>
          <button
            onClick={() => dispatch({ type: "INCREMENT", id: props.info.id })}
          >
            +
          </button>
        </StyledIncrementDiv>
      </StyledInfoDiv>
    </StyledMainDiv>
  );
}
