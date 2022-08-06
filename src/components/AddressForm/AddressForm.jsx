import { useForm } from "../../hooks/useForm"
import React from "react"
import { Form } from "./styled"
import { Button, TextField } from "@mui/material"
import { AddAddressPUT, Headers } from "../../api/manifest"
import { goToHome } from "../../routes/Coordinator"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const AdressForm = () => {
    const navigate = useNavigate()
    const [form, onChange, clearInput] = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""})


    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log("foi");
        addAddress()
    }   
    
    const addAddress = () => {
        console.log(Headers, form);
        axios.put(AddAddressPUT, form, {headers: {
            "Content-Type": "application/json",
            auth: localStorage.getItem("tknFutureEats")
        }})
        .then((res) => {
            localStorage.setItem("tknFutureEats", res.data.token)
            goToHome(navigate)
            clearInput()
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <Form onSubmit={onSubmitForm}>
            <TextField
                type="text"
                color="secondary"
                label="Logradouro"
                name="street"
                value={form.street}
                onChange={onChange}
                required
                placeholder="Rua/Av."
                focused
            />
            <TextField
                color="secondary"
                label="Numero"
                name="number"
                type="text"
                value={form.number}
                onChange={onChange}
                required
                placeholder="Número"
                focused
            />
            <TextField
                color="secondary"
                label="Complemento"
                name="complement"
                value={form.complement}
                onChange={onChange}
                
                placeholder="Apto./Bloco"
                focused
            />
            <TextField
                color="secondary"
                label="Bairro"
                name="neighbourhood"
                value={form.neighbourhood}
                onChange={onChange}
                required
                placeholder="Bairro"
                focused
            />
            <TextField
                color="secondary"
                label="Cidade"
                name="city"
                value={form.city}
                onChange={onChange}
                required
                placeholder="Cidade"
                focused
            />
            <TextField
                color="secondary"
                label="Estado"
                name="state"
                value={form.state}
                onChange={onChange}
                required
                placeholder="Estado"
                inputProps={{max: 2}}
                focused
            />
            <Button 
            sx={{
                textTransform:"none"
            }}
            variant="contained"
            type="submit"
            >Salvar</Button>        
        </Form>
    )
}

export default AdressForm