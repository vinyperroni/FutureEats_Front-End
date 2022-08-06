import { RadioGroup } from "@mui/material";
import { FormControl } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Radio } from "@mui/material";
import { Button } from "@mui/material";
import { ContainerForm, LineForm } from "./styled";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { Headers, PlaceOrderPOST } from "../../api/manifest";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";

export const CartPageForm = () => {
  const [form, onChange, clearInput] = useForm({ paymentMethod: "" });
  const navigate = useNavigate();
  const orderList = JSON.parse(window.localStorage.getItem('cart'));

  const productObject = orderList && orderList.map((p)=>{
    return {quantity: p.quantity, id: p.id}
  })

  const data = {
    products: productObject,
    paymentMethod: form.paymentMethod,
  }

  console.log(productObject);
  console.log(data);


  
  const placeOrder = () => {
    axios
      .post(PlaceOrderPOST, data, {
        headers: Headers
      })
      .then((res) => {
        alert("pedido realizado")
        goToHome(navigate);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  const onSubmitOrder = (e) => {
    e.preventDefault();
    placeOrder();
  };

  console.log(form);

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
            value="Dinheiro"
            control={<Radio required color="secondary" />}
            label="Dinheiro"
          />
          <FormControlLabel
            value="Cartão de crédito"
            control={<Radio required color="secondary" />}
            label="Cartão de crédito"
          />
          <FormControlLabel
            value="Cartão de dédito"
            control={<Radio required color="secondary" />}
            label="Cartão de dédito"
          />
          <FormControlLabel
            value="Paypal"
            control={<Radio required color="secondary" />}
            label="Paypal"
          />
        </RadioGroup>
        <Button
          sx={{ margin: "10px", marginTop: "32px", marginBottom: "55px" }}
          variant="contained"
          type="submit"
        >
          Confirmar
        </Button>
      </FormControl>
    </ContainerForm>
  );
};
