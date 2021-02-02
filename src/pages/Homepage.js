import React from "react"
import styled from "styled-components"
import AppBar from "../components/AppBar"
import Layout from "../components/Layout"
import cameraPhoto from "../images/camera.jpg"

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1169px;
  width: 100%;
  background-color: #e8b741;
  background-image: url(${cameraPhoto});
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
`

const TitleH1 = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
  height: 200px;
`

const StyledH4 = styled.h4`
  margin: auto;
  /* color: white; */
  @media (min-width: 600px) {
    font-size: 30px;
  }
`

const StyledH1 = styled.h1`
  margin: auto;
  /* color: white; */
  @media (min-width: 600px) {
    font-size: 50px;
  }
`

export default function Homepage() {
  return (
    <Layout>
      <MainDiv>
        <TitleH1>
          <StyledH1>CameraStore</StyledH1>
          <StyledH4>
            Pick from a curated selection of the finest cameras available
          </StyledH4>
        </TitleH1>
      </MainDiv>
    </Layout>
  )
}
