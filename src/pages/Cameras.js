import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import Layout from "../components/layout";
import Card from "../components/UI/Card";
import CameraCard from "../components/CameraCard";
import Button from "../components/UI/Button";
import cameras from "../images/cameras.jpg";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding-bottom: 75px;
`;

const StyledHeroDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;

  background-image: url(${cameras});
  background-size: 100%;

  background-position: center;
  margin-bottom: 50px;
  h1 {
    color: white;
  }
  @media (max-width: 1354px) {
    background-size: 300%;
  }
  /* @media (min-width: 1200px) {
    width: 1600px;
  } */
`;

const CameraArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1200px) {
    width: 1400px;
    height: 100%;
    z-index: 3;
  }
`;

const StyledBackdropDiv = styled.div`
  height: 100vh;
  background-image: linear-gradient(to top right, #c4cace, #e8b741);
`;

const StyledOrderByDiv = styled.div``;

const StyledSelect = styled.select`
  height: 50px;
  border-radius: 4px;
`;

export default function Cameras() {
  const [cameras, setCameras] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    let cameras = null;
    axios
      .get("http://localhost:4000/cameras")
      // .get("https://ecommerce-site-backend.herokuapp.com/cameras")
      .then(response => {
        cameras = response.data;
        cameras.forEach(element => {
          element.amount = 1;
        });
      })
      .then(response => setCameras(cameras));
  }, []);

  const addToCartHandler = item => {
    dispatch({ type: "ADD", item });
  };

  const sortHandler = type => {
    let newCameras = JSON.parse(JSON.stringify(cameras));
    switch (type) {
      case "name-desc":
        newCameras.sort(function (a, b) {
          var x = a.name.toLowerCase();
          var y = b.name.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        setCameras(newCameras);
        break;
      case "name-asc":
        newCameras.sort(function (a, b) {
          var x = a.name.toLowerCase();
          var y = b.name.toLowerCase();
          if (x > y) {
            return -1;
          }
          if (x < y) {
            return 1;
          }
          return 0;
        });
        setCameras(newCameras);
        break;
      case "price-desc":
        newCameras.sort(function (a, b) {
          return b.price - a.price;
        });
        setCameras(newCameras);
        break;
      case "price-asc":
        newCameras.sort(function (a, b) {
          return a.price - b.price;
        });
        setCameras(newCameras);
        break;
    }
  };

  return (
    <Layout>
      {cameras.length === 0 ? <StyledBackdropDiv /> : null}
      <Page>
        <StyledHeroDiv>
          <h1>Cameras</h1>
        </StyledHeroDiv>
        <StyledOrderByDiv>
          <StyledSelect onChange={e => sortHandler(e.target.value)}>
            <option value="name-desc">Name A-Z</option>
            <option value="name-asc">Name Z-A</option>
            <option value="price-desc">Price High-Low</option>
            <option value="price-asc">Price Low-High</option>
          </StyledSelect>
        </StyledOrderByDiv>
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
