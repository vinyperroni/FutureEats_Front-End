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


export default function CartPage() {
  useProtectedPage();

  const [profile, setProfile] = useState();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlbU1QdmlyeTB2UmhZWXUxVU1JIiwibmFtZSI6IkxpbGFUZXN0IiwiZW1haWwiOiJsaWxhdGVzdEBsaWxhdGVzdC5jb20iLCJjcGYiOiI2NjYuOTk5LjY2Ni05NiIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NTk1NDgwNDB9.TMg4EOwh9HvtYqKmFKAK3ytSTt_zqRE2q5p6FkjiJb0";

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
        <p>Carrinho vazio</p>
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
