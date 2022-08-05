import React from "react"
import { useForm } from "../../hooks/useForm"
import { TextField, Button } from "@mui/material"
import { LoginFormContainer } from "./styled"
import { IconButton } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import axios from "axios";

import { LoginPOST } from "../../api/manifest"

import { goToHome } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate()
    const [form, onChange, clearInput] = useForm({ email: "", password: ""})

    const [values, setValues] = React.useState({
        showPassword: false
    });


    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log("foi");
        login()
    }
    
    const login = () => {
        console.log(form);
        axios.post(LoginPOST, form)
        .then((res) => {
            console.log(res);
            localStorage.setItem("tknFutureEats", res.data.token)
            clearInput()
            goToHome(navigate)
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });        
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return(
        <LoginFormContainer onSubmit={onSubmitForm}>
            <TextField
                type="text"
                color="secondary"
                label="Email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                placeholder="email@email.com"
                focused
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
                    label="Password"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    
                />
            </FormControl>

            <Button 
            sx={{
                textTransform:"none"
            }}
            variant="contained"
            type="submit"
            >Entrar</Button>        


        </LoginFormContainer>
    )
}

export default LoginForm