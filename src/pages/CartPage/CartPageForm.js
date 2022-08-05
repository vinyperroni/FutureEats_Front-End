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

export const CartPageForm = () => {
  const [form, onChange, clearInput] = useForm({ paymentMethod: "" });
  const navigate = useNavigate();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlbU1QdmlyeTB2UmhZWXUxVU1JIiwibmFtZSI6IkxpbGFUZXN0IiwiZW1haWwiOiJsaWxhdGVzdEBsaWxhdGVzdC5jb20iLCJjcGYiOiI2NjYuOTk5LjY2Ni05NiIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NTk1NDgwNDB9.TMg4EOwh9HvtYqKmFKAK3ytSTt_zqRE2q5p6FkjiJb0";

  const placeOrder = () => {
    axios
      .post(PlaceOrderPOST, {
        headers: {
          "Content-Type": "application/json",
          auth: token,
        },
      })
      .then((res) => {
        alert("pedido realizado");
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  const onSubmitOrder = (e) => {
    e.preventDefault();
    placeOrder();
    goToHome(navigate);
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
          sx={{ margin: "10px", marginTop: "32px" }}
          variant="contained"
          type="submit"
        >
          Confirmar
        </Button>
      </FormControl>
    </ContainerForm>
  );
};
