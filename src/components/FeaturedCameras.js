import React from "react";
import styled from "styled-components";
import cameraStreet from "../images/camera-street.jpg";
import leicaR7 from "../images/leicaR7.jpg";

const StyledRootDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 500px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 1500px;
  img {
    height: 460px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: 1000px;
    justify-content: center;
    img {
      width: 350px;
    }
  }
`;

const StyledTextAreaDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px;
  @media (max-width: 1000px) {
    padding: 25px;
  }
`;

const StyledPriceAreaDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;
`;

export default function FeaturedCameras(props) {
  return (
    <StyledRootDiv>
      {props.photo === "beach" ? <img src={cameraStreet} /> : null}
      {/* {props.photo === "table" ? <img src={cameraCloseup} /> : null} */}
      <StyledTextAreaDiv>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <StyledPriceAreaDiv>
          <h2>{props.price}</h2>
        </StyledPriceAreaDiv>
      </StyledTextAreaDiv>
      {props.photo === "close" ? <img src={leicaR7} /> : null}
    </StyledRootDiv>
  );
}
