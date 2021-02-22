import React from "react";
import styled from "styled-components";
import cameraCloseup from "../images/camera-closeup.jpg";
import cameraTable from "../images/camera-table.jpg";
import cameraStreet from "../images/camera-street.jpg";
import leicaM6 from "../images/leica-m6.jpg";
import eosr5 from "../images/canonEOSR5.jpg";
import leicaR7 from "../images/leicaR7.jpg";

const StyledRootDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 500px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  img {
    height: 460px;
  }
`;

const StyledTextAreaDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px;
  /* background-color: red; */
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
