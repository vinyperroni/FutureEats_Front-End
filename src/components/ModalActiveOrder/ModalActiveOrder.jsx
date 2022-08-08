import styled from 'styled-components';
import { primaryColor } from '../../theme/colors';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import axios from 'axios';
import { ActiveOrderGET } from '../../api/manifest';
import { useEffect, useState } from 'react';

const ModalContainer = styled.div`
    width: 100%;
    background-color: ${primaryColor};
    display: ${ props => props.show ? 'flex' : 'none' };
    position: fixed;
    bottom: 50px;
`;

const DivIcon = styled.div`
    padding: 44px 24px;
`;

const DivText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    & span:first-child {
        color: white;
    }
    & span:last-child {
        text-transform: uppercase;
        font-weight: bold;
    }
`;

export default function ModalActiveOrder() {

    const [order, setOrder] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const getActiveOrder = () => {
        axios
            .get(ActiveOrderGET, {
                headers: {
                    "Content-Type": "application/json",
                    auth: window.localStorage.getItem("tknFutureEats")
                }
            })
            .then(res => {
                if (res.data.order) {
                    setShowModal(true)
                }
                setOrder(res.data.order)
            })
    }

    useEffect(() => {
        getActiveOrder()
    }, [])

    const orderPlaced = order && new Date(order.createdAt)
    const orderFinished = order && new Date(order.expiresAt)
    const timer = order && orderFinished.getTime() - orderPlaced.getTime()

    if (order) {
        setTimeout(() => {
            setShowModal(false);
        }, timer)
    }
    

    return <ModalContainer show={showModal}>
        <DivIcon>
            <AccessTimeIcon fontSize='large' sx={{color: 'white'}} />
        </DivIcon>
        <DivText>
            <span>Pedido em andamento</span>
            <span>{order && order.restaurantName}</span>
            <span>Subtotal R${order && order.totalPrice.toFixed(2)}</span>
        </DivText>
    </ModalContainer>
}