import React from "react";
import styled from "styled-components";
import cameraBeach from "../images/camera-beach.jpg";
import cameraCloseup from "../images/camera-closeup.jpg";
import cameraTable from "../images/camera-table.jpg";

const StyledRootDiv = styled.div`
  display: flex;
  height: 500px;
  padding: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  img {
    height: 400px;
  }
`;

const StyledTextAreaDiv = styled.div`
  margin: 50px;
`;

export default function CameraDiv(props) {
  return (
    <StyledRootDiv>
      {props.photo === "beach" ? <img src={cameraBeach} /> : null}
      {props.photo === "table" ? <img src={cameraTable} /> : null}
      <StyledTextAreaDiv>
        Words, No serisouslkj a lot of words. workds that make you thingk. and
        words that make you want to buyu products.
      </StyledTextAreaDiv>
      {props.photo === "close" ? <img src={cameraCloseup} /> : null}
    </StyledRootDiv>
  );
}
