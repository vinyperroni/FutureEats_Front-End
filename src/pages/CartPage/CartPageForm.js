import { RadioGroup } from "@mui/material";
import { FormControl } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { FormLabel } from "@mui/material";
import { Radio } from "@mui/material";
import { Button } from "@mui/material";
import { ContainerForm } from "./styled";
import { useForm } from "../../hooks/useForm";

export const CartPageForm = () => {
  const [form, onChange, clearInput] = useForm({ paymentMethod: "" });

  console.log(form)
  
  return (
    <ContainerForm>
      <FormControl component="fieldset" fullWidth margin="normal">
        <FormLabel component="legend" color="secondary">
          Formas de Pagamento
        <hr />
        </FormLabel>
        <RadioGroup
          name="paymentMethod"
          value={form.paymentMethod}
          onChange={onChange}
        >
          <FormControlLabel
            value="Dinheiro"
            control={<Radio color="secondary" />}
            label="Dinheiro"
          />
          <FormControlLabel
            value="Cartão de crédito"
            control={<Radio color="secondary" />}
            label="Cartão de crédito"
          />
          <FormControlLabel
            value="Cartão de dédito"
            control={<Radio color="secondary" />}
            label="Cartão de dédito"
          />
          <FormControlLabel
            value="Paypal"
            control={<Radio color="secondary" />}
            label="Paypal"
          />
        </RadioGroup>
        <Button variant="contained">Confirmar</Button>
      </FormControl>
    </ContainerForm>
  );
};
