import { useState } from "react";
import styled from "styled-components";

const Grayout = styled.span`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: red;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
    span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        max-height: 100%;
        background-color: white;
        border-radius: 0.5em;
        padding: 0.5em;
        z-index: 2;
        box-shadow: 0 0 0.5em rgba(0,0,0,0.5);
        strong {
            width: 100%;
            margin-top: 0.5em;
            text-align: center;
            font-size: 1.25em;
            font-weight: 600;
            color: black;
        }
        form {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 1em;
            width: 100%;
            input {
                width: 90%;
                height: 2em;
                padding: 0.25em;
                border-radius: 0.5em;
                border: solid 0.15em rgba(0,0,0,0.25);
                text-align: center;
                font-size: 1.25em;
                font-weight: 500;
                color: black;
                margin: 0.25em 0;
            }
            button {
                display: flex;
                justify-content: center;
                align-items: center;
                width: fit-content;
                height: fit-content;
                padding: 0.25em 1em 1em 1em;
                border: none;
                background-color: transparent;
                color: green;
                font-size: 1.25em;
                font-weight: bold;
                cursor: pointer;
            }
        }
    }    
`

export const ModalQuantity = ({quantity, setQuantity, setTriggerModal, product}) => {
    const [quantityInput, setQuantityInput] = useState(quantity);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) {
            const productInCart = cart.find(item => item.id === product.id);
            if (productInCart) {
                productInCart.quantity = quantityInput;
            } else {
                cart.push({...product, quantity: quantityInput });
            }
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            localStorage.setItem("cart", JSON.stringify([{...product, quantity: quantityInput }]));
        }
        setQuantity(quantityInput);
        setTriggerModal(false);        
    }
    const handleRemove = (e) => {
        e.preventDefault();

        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) {
            const newCart = cart.filter(item => item.id !== product.id);
            localStorage.setItem("cart", JSON.stringify(newCart));
            setQuantity(0);
        } 
        setTriggerModal(false);
    }

    return (
        <Grayout>
            {quantity === 0 &&
                <span>
                    <strong>Selecione a quantidade desejada:</strong>
                    <br />
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input type="number" min="1" max="10" value={quantityInput} onChange={(e) => setQuantityInput(e.target.value)} />
                        <button style={{color:"red"}} onClick={() => setTriggerModal(false)}>Cancelar</button>
                        <button>Adicionar ao carrinho</button>
                    </form>
                </span>
            }
            {quantity > 0 &&
                <span>
                    <strong>Selecione a quantidade desejada:</strong>
                    <br />
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input type="number" min="1" max="10" value={quantityInput} onChange={(e) => setQuantityInput(e.target.value)} />
                        <button style={{color:"red"}} onClick={(e) => handleRemove(e)}>Remover item</button>
                        <button>Atualizar</button>
                    </form>
                </span>
            }
        </Grayout>
    );
}