import { RadioGroup } from "@mui/material";
import { FormControl } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Radio } from "@mui/material";
import { Button } from "@mui/material";
import { ContainerForm, LineForm } from "./styled";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { PlaceOrderPOST } from "../../api/manifest";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import { useState } from "react";

export const CartPageForm = (props) => {
  const [form, onChange, clearInput] = useForm({ paymentMethod: "" });
  const navigate = useNavigate();
  const orderList = JSON.parse(window.localStorage.getItem("cart"));
  const restaurantId = window.localStorage.getItem("restaurantId");
  const [activeOrder, setActiveOrder] = useState(false);

  const productObject =
    orderList &&
    orderList.map((p) => {
      return { quantity: p.quantity, id: p.id };
    });

  const data = {
    products: productObject,
    paymentMethod: form.paymentMethod,
  };

  const placeOrder = () => {
    axios
      .post(`${PlaceOrderPOST}${restaurantId}/order`, data, {
        headers: {
          "Content-Type": "application/json",
          auth: window.localStorage.getItem("tknFutureEats")
      },
      })
      .then((res) => {
        alert("pedido realizado");
        goToHome(navigate);
        window.localStorage.removeItem("cart");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const onSubmitOrder = (e) => {
    e.preventDefault();
    placeOrder();
  };

  return (
    <ContainerForm
      onSubmit={onSubmitOrder}
      required
      title="Escolha uma forma de pagamento"
    >
      <FormControl component="fieldset" fullWidth margin="normal">
        <p>Forma de pagamento</p>
        <LineForm />
        <RadioGroup
          name="paymentMethod"
          value={form.paymentMethod}
          onChange={onChange}
        >
          <FormControlLabel
            value="money"
            control={<Radio required color="secondary" />}
            label="Dinheiro"
          />
          <FormControlLabel
            value="creditcard"
            control={<Radio required color="secondary" />}
            label="Cartão de crédito"
          />
        </RadioGroup>
        <Button
          sx={{ margin: "10px", marginTop: "32px", marginBottom: "55px" }}
          variant="contained"
          type="submit"
          disabled={props.activeOrder}
        >
          Confirmar
        </Button>
      </FormControl>
    </ContainerForm>
  );
};
