import { Header } from "../../components/Header/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import { ProfileGET } from "../../api/manifest";
import { useState, useEffect } from "react";
import {
  AddressCart,
  PriceContainer,
  ValueContainer,
  
} from "./styled";
import { CartPageForm } from "./CartPageForm";

export default function CartPage() {
  useProtectedPage();
  
  const [profile, setProfile] = useState();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlbU1QdmlyeTB2UmhZWXUxVU1JIiwibmFtZSI6IkxpbGFUZXN0IiwiZW1haWwiOiJsaWxhdGVzdEBsaWxhdGVzdC5jb20iLCJjcGYiOiI2NjYuOTk5LjY2Ni05NiIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NTk1NDgwNDB9.TMg4EOwh9HvtYqKmFKAK3ytSTt_zqRE2q5p6FkjiJb0";

  const getProfile = () => {
    axios
      .get(ProfileGET, {
        headers: {
          "Content-Type": "application/json",
          auth: token,
        },
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
    <div>
      <Header />
      <AddressCart>
        <p>Endereço de Entrega</p>
        {profile && <p>{profile.user.address}</p>}
      </AddressCart>
      <p>Carrinho vazio</p>
      <PriceContainer>
        <p>Subtotal</p>
        <ValueContainer>
          <p>Frete</p>
          <p>R$00,00</p>
        </ValueContainer>
      </PriceContainer>
      <CartPageForm/>
      
    </div>
  );
}
