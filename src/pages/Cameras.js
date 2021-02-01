import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import Layout from "../components/Layout"
import Card from "../components/UI/Card"
import CameraCard from "../components/CameraCard"
import Button from "../components/UI/Button"

const Page = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding-top: 25px;
  padding-bottom: 75px;
  background-image: linear-gradient(to top right, #c4cace, #e8b741);

  /* @media (min-width: 1355px) {
    height: 93vh;
  }   */
`

const PageHeader = styled.div`
  display: flex;
  background-color: #e8b741;
  height: 100px;
`

const StyledH1 = styled.h1`
  margin: auto;
  color: white;
`

const CameraArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 1200px) {
    width: 1400px;
    height: 100%;
  }
`

export default function Cameras() {
  const [cameras, setCameras] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:4000/cameras")
      .then(response => setCameras(response.data))
  }, [])

  const addToCartHandler = () => {}

  return (
    <Layout>
      <Page>
        <CameraArea>
          {cameras.length > 0
            ? cameras.map(camera => (
                <CameraCard
                  key={cameras.indexOf(camera)}
                  info={camera}
                ></CameraCard>
              ))
            : null}
        </CameraArea>
      </Page>
      {/* <Button onClick={() => console.log(theme)}>theme</Button> */}
    </Layout>
  )
}
