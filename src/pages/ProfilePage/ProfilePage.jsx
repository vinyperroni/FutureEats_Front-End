import { Header } from "../../components/Header/Header";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { ProfilePageContainer, DivInfo, DivUser, DivAddress, DivHistory, Divider, CardHistory, CardsContainer } from "./styled";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToAddress, goToEditUser } from "../../routes/Coordinator";
import NavFooter from "../../components/NavFooter/NavFooter";
import axios from "axios";
import { OrdersHistoryGET, ProfileGET } from "../../api/manifest";
import { useEffect, useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export default function ProfilePage() {
    useProtectedPage()
    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [history, setHistory] = useState([]);

    const getHistory = () => {
        axios
            .get(OrdersHistoryGET, {
                headers: {
                    "Content-Type": "application/json",
                    auth: window.localStorage.getItem("tknFutureEats")
                }
            })
            .then((res) => {
                setHistory(res.data.orders);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getUserData = () => {
        axios
            .get(ProfileGET, {
                headers: {
                    "Content-Type": "application/json",
                    auth: window.localStorage.getItem("tknFutureEats")
                }
            })
            .then((res) => {
                setUser(res.data.user);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getHistory();
        getUserData();
    }, [])

    const historyList = history && history.map((order) => {
        let date = new Date(order.expiresAt)
        return <CardHistory>
        <span>{order.restaurantName}</span>
        <span>{date.toLocaleString('pt-BR', {year: 'numeric', month: 'long', day: 'numeric'})}</span>
        <span>SUBTOTAL R${order.totalPrice.toFixed(2)}</span>
    </CardHistory>
    })

    return (
    <>
    <ProfilePageContainer>
        <Header />
        <DivUser>
            <DivInfo>
                <span>{user.name}</span>
                <span>{user.email}</span>
                <span>{user.cpf}</span>
            </DivInfo>
            <IconButton onClick={() => goToEditUser(navigate)}>
                <EditOutlinedIcon sx={{color:"black"}}/>
            </IconButton>
        </DivUser>
        <DivAddress>
            <DivInfo>
                <span>Endereço cadastrado</span>
                <span>{user.address}</span>
            </DivInfo>
            <IconButton onClick={() => goToAddress(navigate)}>
                <EditOutlinedIcon sx={{color:"black"}}/>
            </IconButton>
        </DivAddress>
        <DivHistory>
            <span>Histórico de Pedidos</span>
            <Divider />
            <CardsContainer>
                {historyList}                           
            </CardsContainer>
            
        </DivHistory>
        <NavFooter />
    </ProfilePageContainer>
    </>
    )
}