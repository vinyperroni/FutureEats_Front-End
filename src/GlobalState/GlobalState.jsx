import React, { useState, useEffect } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import axios from "axios";
import { ListRestaurantGET, ProfileGET, FullAddressGET } from "../api/manifest";

const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState();
  const [user, setUser] = useState({})
  const [address, setAddress] = useState({})

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

  const getUserData = () => {
    axios
        .get(ProfileGET, {
            headers: {
                "Content-Type": "application/json",
                auth: window.localStorage.getItem("tknFutureEats")
            }
        })
        .then((res) => {
            setUser(res.data.user);
            getFullAddress()
        })
        .catch((err) => {
            console.log(err);
    })
  }

  const getFullAddress = () => {
    axios
    .get(FullAddressGET, {
        headers: {
            "Content-Type": "application/json",
            auth: window.localStorage.getItem("tknFutureEats")
        }
    })
    .then((res) => {
        setAddress(res.data.address);
    })
    .catch((err) => {
        console.log(err);
  })

  }

  useEffect(() => {
    if (localStorage.getItem("tknFutureEats")) {
      getUserData()
    }    
  }, [])


  return (
    <GlobalStateContext.Provider value={{ restaurants, getRestaurants, user, getUserData, address }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
