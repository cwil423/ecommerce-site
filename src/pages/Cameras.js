import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import Layout from "../components/layout";
import Card from "../components/UI/Card";
import CameraCard from "../components/CameraCard";
import Button from "../components/UI/Button";

const Page = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding-top: 25px;
  padding-bottom: 75px;

  /* @media (min-width: 1355px) {
    height: 93vh;
  }   */
`;

const PageHeader = styled.div`
  display: flex;
  background-color: #e8b741;
  height: 100px;
`;

const StyledH1 = styled.h1`
  margin: auto;
  color: white;
`;

const CameraArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1200px) {
    width: 1400px;
    height: 100%;
  }
`;

export default function Cameras() {
  const [cameras, setCameras] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    let cameras = null;
    axios
      .get("https://ecommerce-site-backend.herokuapp.com/cameras")
      .then(response => console.log(response));
    // .then(response => {
    //   cameras = response.data;
    //   cameras.forEach(element => {
    //     element.amount = 1;
    //   });
    // })
    // .then(response => setCameras(cameras));
  }, []);

  const addToCartHandler = item => {
    // setButtonDisabled(true)
    dispatch({ type: "ADD", item });
    // setTimeout(() => {
    //   setButtonDisabled(false)
    // }, 200)
  };

  return (
    <Layout>
      <Page>
        <CameraArea>
          {cameras.length > 0
            ? cameras.map(camera => (
                <CameraCard
                  key={cameras.indexOf(camera)}
                  info={camera}
                  addItem={addToCartHandler}
                  disabled={buttonDisabled}
                />
              ))
            : null}
        </CameraArea>
      </Page>
    </Layout>
  );
}
