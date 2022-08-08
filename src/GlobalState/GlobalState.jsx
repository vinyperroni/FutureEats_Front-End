import React, { useState, useEffect } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import axios from "axios";
import { ListRestaurantGET } from "../api/manifest";

const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState();

  const getRestaurants = () => {
    axios
      .get(ListRestaurantGET, {
        headers: {
          "Content-Type": "application/json",
          auth: localStorage.getItem("tknFutureEats"),
        },
      })
      .then((res) => {
        setRestaurants(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <GlobalStateContext.Provider value={{ restaurants, getRestaurants }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
