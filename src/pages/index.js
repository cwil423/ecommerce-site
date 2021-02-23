import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import AppBar from "../components/AppBar";
import Layout from "../components/layout";
import cameraPhoto from "../images/camera.jpg";
import FeaturedCameras from "../components/FeaturedCameras";

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeroDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #e8b741;

  img {
    height: 650px;
    margin: 0px;
    padding: 0px;
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

const StyledLink = styled(props => <Link {...props} />)`
  color: #e8b741;
  text-decoration: none;
  /* font-size: x-large; */
`;

const StyledBottomDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Homepage() {
  return (
    <Layout>
      <StyledRoot>
        <StyledHeroDiv>
          <StyledCaptionDiv>
            <h1>Top of the line cameras</h1>
            <p>For professionals and professional amateurs</p>
            <StyledLinkDiv>
              <StyledLink to="/Cameras">Buy Here</StyledLink>
            </StyledLinkDiv>
          </StyledCaptionDiv>
          <img src={cameraPhoto} />
        </StyledHeroDiv>
        <StyledBottomDiv>
          <FeaturedCameras
            photoOrientation="left"
            name="Fujifilm X-T3"
            photo="beach"
            description="The X-T3 brings with it a brand new sensor, improved autofocus and video performance that makes it competitive with Panasonic's GH5, taking the X-T series from being a very good stills camera to one of the best stills/video hybrids on the market.
            With its classic looks, attractive photos and superb video, it's the APS-C camera to beat."
            price="$1499.00"
          >
            Camera
          </FeaturedCameras>
          <FeaturedCameras
            photoOrientation="right"
            name="Leica R7"
            photo="close"
            description="Introduced in 1992, the Leica R-system cameras are popular with both amateur and professional photographers. Shutterbugs will like them for their solid build, quality, and excellent lenses. In program mode, the R7 offers complete and automatic control, which is selected as necessary by the camera. In any setting, flash ready automation will select synchronization based on the shutter speed."
            price="$850.00"
          >
            Camera
          </FeaturedCameras>
          {/* <FeaturedCameras photoOrientation="left" photo="table">
            Camera
          </FeaturedCameras> */}
        </StyledBottomDiv>
      </StyledRoot>
    </Layout>
  );
}
