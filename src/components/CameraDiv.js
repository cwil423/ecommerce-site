import React from "react";
import styled from "styled-components";
import cameraBeach from "../images/camera-beach.jpg";
import cameraCloseup from "../images/camera-closeup.jpg";
import cameraTable from "../images/camera-table.jpg";
import cameraStreet from "../images/camera-street.jpg";
import leicaM6 from "../images/leica-m6.jpg";

const StyledRootDiv = styled.div`
  display: flex;
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

export default function CameraDiv(props) {
  return (
    <StyledRootDiv>
      {props.photo === "beach" ? <img src={cameraStreet} /> : null}
      {props.photo === "table" ? <img src={cameraTable} /> : null}
      <StyledTextAreaDiv>
        <h1>Fujifilm X-T3</h1>
        <p>{props.description}</p>
        <StyledPriceAreaDiv>
          <h2>{props.price}</h2>
        </StyledPriceAreaDiv>
      </StyledTextAreaDiv>
      {props.photo === "close" ? <img src={cameraCloseup} /> : null}
    </StyledRootDiv>
  );
}
