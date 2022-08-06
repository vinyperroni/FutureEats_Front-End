import { Header } from "../../components/Header/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import { Headers, ProfileGET } from "../../api/manifest";
import { useState, useEffect } from "react";
import {
  AddressCart,
  PriceContainer,
  ValueContainer,
  ContainerPage,
} from "./styled";
import { CartPageForm } from "./CartPageForm";
import NavFooter from "../../components/NavFooter/NavFooter";
import { ProductCard } from "../../components/ProductCard/ProductCard";


export default function CartPage() {
  useProtectedPage();

  const [profile, setProfile] = useState();
  const orderList = JSON.parse(window.localStorage.getItem('cart'));

  const renderOrderList =()=>{
   if(orderList && orderList.length > 0){
    return <>
    {orderList && orderList.map((p)=>{
      return <ProductCard key={p.id} product={p} />
    })}
    </>
  } else{
    <p>Carrinho vazio</p>
  }
  }
  
  console.log(orderList)
  
  const getProfile = () => {
    axios
      .get(ProfileGET, {
        headers: Headers
      })
      .then((res) => {
        console.log(res.data);
        setProfile(res.data);
      })
      .catch((err) => {
        console.log("deu erro");
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

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
            <p>Frete</p>
          <ValueContainer>
          <p>Subtotal</p>
            <p>R$00,00</p>
          </ValueContainer>
        </PriceContainer>
        <CartPageForm />
      </ContainerPage>
      <NavFooter />
    </>
  );
}
