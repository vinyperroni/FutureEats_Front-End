import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import { Header } from "../../components/Header/Header";
import { useForm } from "../../hooks/useForm";
import { ProfileGET, UpdateProfilePUT } from "../../api/manifest";
import axios from "axios";
import { useState, useEffect } from "react";
import { goBack } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";

export const EditUserContainer = styled.div`
    margin: 0 auto;
    width: 100vw;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormEditUser = styled.form`
    width: 100%;
    max-width: 368px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
    & button {
        margin-top: 16px;
    }
`;

export default function EditUserPage() {

    const [user, setUser] = useState({})

    const navigate = useNavigate();
    const [form, onChange, clearInput] = useForm({name: user.name, email: user.email, cpf: user.cpf});

    const getUserData = () => {
        axios
            .get(ProfileGET, {
                headers: {
                    "Content-Type": "application/json",
                    auth: window.localStorage.getItem("tknFutureEats")
                }
            })
            .then((res) => {
                setUser(res.data.user)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getUserData();
    }, [])

    const editUser = (event) => {
        event.preventDefault();
        axios
            .put(UpdateProfilePUT, form, {
                headers: {
                    "Content-Type": "application/json",
                    auth: window.localStorage.getItem("tknFutureEats")
                }
            })
            .then(() => {
                console.log("Alterou");
                clearInput();
                goBack(navigate);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    console.log(user)
    return <div>
        <EditUserContainer>
            <Header />
            <FormEditUser onSubmit={editUser}>
                <TextField
                    type="text"
                    color="secondary"
                    label="Nome"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    placeholder="Digite o seu nome"
                    focused
                />
                <TextField
                    color="secondary"
                    label="E-mail"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    placeholder="email@email.com"
                    focused
                />
                <TextField
                    color="secondary"
                    label="CPF"
                    name="cpf"
                    value={form.cpf}
                    onChange={onChange}
                    required
                    placeholder="000.000.000-00"
                    focused
                    //inputProps={{ pattern: "([0-9]{3}[.][0-9]{3}[.][-][0-9]{2})" }}
                />
                <Button 
                sx={{
                    textTransform:"none",
                    fontWeight: 'bold'
                }}
                variant="contained"
                type="submit"
                >Salvar</Button> 
            </FormEditUser>
        </EditUserContainer>
    </div>
}