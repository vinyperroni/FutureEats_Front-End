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

export default function ProfilePage() {

    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [history, setHistory] = useState([]);

    const getHistory = () => {
        axios
            .get(OrdersHistoryGET, {
                headers: {
                    "Content-Type": "application/json",
                    auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlbU1QdmlyeTB2UmhZWXUxVU1JIiwibmFtZSI6IkxpbGFUZXN0IiwiZW1haWwiOiJsaWxhdGVzdEBsaWxhdGVzdC5jb20iLCJjcGYiOiI2NjYuOTk5LjY2Ni05NiIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NTk1MzQ0NzF9.inc_tQdZqdL8Q-lj_G40pf_RKCIdy0AYspgaBJpo348"
                }
            })
            .then((res) => {
                console.log(res.data.orders)
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