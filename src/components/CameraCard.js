import React from "react";
import styled from "styled-components";
import Button from "./UI/Button";

const StyledMainBody = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px;
  align-items: center;
  /* border-radius: 10px; */
  width: 350px;

  img {
    height: 200px;
    width: 350px;
    /* border-top-left-radius: 10px;
    border-top-right-radius: 10px; */
  }

  button {
    font-size: 1em;
    width: 115px;
    height: 35px;
    color: white;
    background-color: #70a37f;
    border-radius: 4px;
    margin-bottom: 10px;
    margin-top: 10px;
    &:hover {
      cursor: pointer;
      background-color: #2e5339;
    }
    &:active {
      transform: translateY(1px);
    }
  }
`;

const StyledInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledNameDiv = styled.div`
  display: flex;
  text-align: center;
`;

const StyledDescriptionDiv = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 18px;
  height: 120px;
`;

export default function CameraCard(props) {
  return (
    <StyledMainBody>
      <img src={props.info.photourl}></img>
      <StyledInfoArea>
        <StyledNameDiv>
          <h1>{props.info.name}</h1>
        </StyledNameDiv>
        <div>
          <h3>${props.info.price.toFixed(2)}</h3>
        </div>
        {/* <StyledDescriptionDiv>
          <p>{props.info.description}</p>
        </StyledDescriptionDiv> */}
      </StyledInfoArea>
      <button
        disabled={props.disabled}
        onClick={() => props.addItem(props.info)}
      >
        Add to Cart
      </button>
    </StyledMainBody>
  );
}
