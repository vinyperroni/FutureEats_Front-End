import { useEffect } from "react";
import useNavigate from "react-router-dom";
import { goToHome } from "../routes/Coordinator";

export const useUnprotectedPage = ()=>{
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            goToHome(navigate)
        }
    },[navigate])

}