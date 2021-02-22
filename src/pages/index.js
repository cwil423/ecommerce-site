import React from "react";
import styled from "styled-components";
import AppBar from "../components/AppBar";
import Layout from "../components/layout";
import cameraPhoto from "../images/camera.jpg";
import CameraDiv from "../components/CameraDiv";

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroDiv = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: #e8b741;
  /* background-image: url(${cameraPhoto}); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 1000px) {
    background-size: 150%;
  }
  @media (min-width: 1000px) {
    background-size: 1600px;
  }
  @media (max-width: 600px) {
    min-height: 661px;
  }
  img {
    height: 650px;
    margin: 0px;
    padding: 0px;
    /* border: 1px solid black; */
  }
`;

const StyledCaptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
  height: 100px;
  width: 500px;
  margin-left: 50px;

  /* color: white; */
  color: white;
`;

const StyledLinkDiv = styled.div`
  height: 50px;
  width: 100px;
  background-color: white;
  color: #e8b741;
  cursor: pointer;
  :active {
    /* box-shadow: 0 1px #666; */
    transform: translateY(1px);
  }
`;

const StyledBottomDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Homepage() {
  return (
    <Layout>
      <StyledRoot>
        <HeroDiv>
          <StyledCaptionDiv>
            <h1>Top of the line cameras</h1>
            <p>For professionals and professional amateurs</p>
            <StyledLinkDiv>Buy Here</StyledLinkDiv>
          </StyledCaptionDiv>
          <img src={cameraPhoto} />
        </HeroDiv>
        <StyledBottomDiv>
          <CameraDiv
            photoOrientation="left"
            photo="beach"
            description="The X-T3 brings with it a brand new sensor, improved autofocus and video performance that makes it competitive with Panasonic's GH5, taking the X-T series from being a very good stills camera to one of the best stills/video hybrids on the market."
            price="$1499.00"
          >
            Camera
          </CameraDiv>
          <CameraDiv photoOrientation="right" photo="close">
            Camera
          </CameraDiv>
          <CameraDiv photoOrientation="left" photo="table">
            Camera
          </CameraDiv>
        </StyledBottomDiv>
      </StyledRoot>
    </Layout>
  );
}
