import { Header } from "../../components/Header/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import { ProfileGET } from "../../api/manifest";
import { useState, useEffect, useContext } from "react";
import {
  AddressCart,
  PriceContainer,
  ValueContainer,
  ContainerPage,
  RestaurantContainer,
} from "./styled";
import { CartPageForm } from "./CartPageForm";
import NavFooter from "../../components/NavFooter/NavFooter";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext";

export default function CartPage() {
  useProtectedPage();

  const [profile, setProfile] = useState();
  const [orderList, setOrderList] = useState(JSON.parse(window.localStorage.getItem("cart")));
  const { restaurants, getRestaurants } = useContext(GlobalStateContext);
  const restaurantId = window.localStorage.getItem("restaurantId");

  useEffect(() => {
    getRestaurants();
    getProfile();
  }, []);

  const restInfoById =
    restaurants &&
    restaurants.filter((r) => {
      if (r.id === restaurantId) {
        return r;
      }
    });

  console.log(restInfoById);
  console.log(restaurants);

  const renderOrderList = () => {
    if (orderList && orderList.length > 0) {
      return (
        <>
          {orderList &&
            restInfoById &&
            restInfoById.map((r) => {
              return (
                <RestaurantContainer key={r.id}>
                  <span>
                    <b>{r.name}</b>
                  </span>
                  <span>{r.address}</span>
                  <span>
                    {r.deliveryTime - 10} - {r.deliveryTime} min
                  </span>
                </RestaurantContainer>
              );
            })}
          {orderList &&
            orderList.map((p) => {
              return <ProductCard key={p.id} product={p} setOrderList={setOrderList}/>;
            })}
        </>
      );
    } else {
      <p>Carrinho vazio</p>;
    }
  };

  let priceSum = 0;
  if (orderList) {
    for (let product of orderList) {
      priceSum += product.price * product.quantity;
    }
  }

  const getProfile = () => {
    axios
      .get(ProfileGET, {
        headers: {
          "Content-Type": "application/json",
          auth: window.localStorage.getItem("tknFutureEats"),
        },
      })
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.log("deu erro");
      });
  };

  // useEffect(() => {
  //   renderOrderList();
  // }, [orderList]);

  return (
    <>
      <Header />
      <ContainerPage>
        <AddressCart>
          <p>Endereço de Entrega</p>
          {profile && <p>{profile.user.address}</p>}
        </AddressCart>
        {renderOrderList()}
        <PriceContainer>
          { orderList && orderList.length>0 && restInfoById ? (
            <p>Frete R${restInfoById[0].shipping.toFixed(2)}</p>
          ) : (
            <p>Frete R$00,00</p>
          )}
          <ValueContainer>
            <p>Subtotal</p>
            {orderList && orderList.length>0 && restInfoById ? (
              <p>R${(priceSum + restInfoById[0].shipping).toFixed(2)}</p>
            ) : (
              <p>R$00,00</p>
            )}
          </ValueContainer>
        </PriceContainer>
        <CartPageForm />
      </ContainerPage>
      <NavFooter />
    </>
  );
}
