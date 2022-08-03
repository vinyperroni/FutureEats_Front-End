import { useForm } from "../../hooks/useForm"
import React, { useState } from "react"
import { Form } from "./styled"
import { IconButton } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from "@mui/material"

import { useNavigate } from "react-router-dom"

import axios from "axios";
import { SignupPOST } from "../../api/manifest"
import { goToAddress } from "../../routes/Coordinator";

const SignUpForm = () => {
    const navigate = useNavigate()
    const [form, onChange, clearInput] = useForm({ name: "", email: "", cpf: "", password: ""})
    const [confirmPwd, setConfirmPwd] = useState("")
    
    const [values, setValues] = React.useState({
        showPassword: false,
        showConfirmPassword:false
    });

    const onChangeConfirm = (event) => {
        setConfirmPwd(event.target.value)
    }

    const handleClickShowPassword = (input) => {
        switch (input) {
            case "password":
                setValues({
                    ...values,
                    showPassword: !values.showPassword,
                });        
                break;
            case "confirm":
                setValues({
                    ...values,
                    showConfirmPassword: !values.showConfirmPassword,
                });    
                break   
            default:
                
                break 
        }
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log("foi");
        signUp()
    }
    
    const signUp = () => {
        console.log(form);
        axios.post(SignupPOST, form)
        .then((res) => {
            console.log(res);
            localStorage.setItem("tknFutureEats", res.data.token)
            goToAddress(navigate)
            clearInput()
            setConfirmPwd("")
        }).catch((err) => {
            console.log(err)
        })
    }

    function validatePassword(){
        const password = document.getElementById("password")
        const confirmPwd = document.getElementById("confirmPwd")
        if(password.value !== confirmPwd.value) {
            console.log(form);
            confirmPwd.setCustomValidity("Senhas diferentes!")
        } else {
            confirmPwd.setCustomValidity('')
        }
        if (password.value.length < 6) {
            console.log(password.value.length);
            password.setCustomValidity("A senha deve ter no minimo 6 caracteres")
        }else{
            password.setCustomValidity('')
        }
    }      

    return (
        <Form onSubmit={onSubmitForm}>
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
                inputProps={{ pattern: "([0-9]{2}[\.][0-9]{3}[\.][0-9]{3}[\/][0-9]{4}[-][0-9]{2})|([0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2})" }}
            />
            <FormControl variant="outlined" focused required color="secondary">
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                    id="password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={form.password}
                    name="password"
                    onChange={onChange}
                    placeholder="Mínimo 6 caracteres"
                    inputProps={{ min: 6}}
                    onKeyUp={validatePassword}
                    label="Password"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => handleClickShowPassword("password")}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    
                />
            </FormControl>
            <FormControl variant="outlined" focused required color="secondary">
                <InputLabel htmlFor="confirmPwd">Confirm</InputLabel>
                <OutlinedInput
                    id="confirmPwd"
                    type={values.showConfirmPassword ? 'text' : 'password'}
                    value={confirmPwd}
                    onChange={onChangeConfirm}
                    name="confirmPwd"
                    placeholder="Confirme a senha anterior"
                    onKeyUp={validatePassword}
                    inputProps= {{ min: "6"}} 
                    label="Confirmar"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => handleClickShowPassword("confirm")}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    
                />
            </FormControl>

            <Button 
            variant="contained"
            type="submit"
            >Criar</Button>        
        </Form>
    )
}

export default SignUpForm