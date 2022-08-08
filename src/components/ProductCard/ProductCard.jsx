import { useEffect, useState } from "react"
import styled from "styled-components"
import { ModalQuantity } from "./ModalQuantity"
import { primaryColor } from "../../theme/colors"

const DivCard = styled.div`
    display: flex;
    gap: 0.25em;
    width: 100%;
    height: 100%;
    max-width: 420px;
    min-height: 6em;
    margin: 0.25em 0;
    border-radius: 0.5em;
    overflow: hidden;
    box-shadow: 0 0 0.2em rgba(0,0,0,0.5);
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5em;
        width: 100%;
        min-height: 100%;
        background-color: white;
        strong {
            width: 100%;
            font-size: 1em;
            font-weight: 600;
            color: black;
        }
        p {
            width: 100%;
            margin: 0.25em 0;
            font-size: 0.75em;
            font-weight: 500;
            color: rgba(0,0,0,0.5);
        }
    }
    section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        width: 25%;
        min-height: 100%;
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: fit-content;
            padding: 0.75em 1em;
            border: solid 0.175em;
            background-color: white;
            color: ${primaryColor};
            font-size: 0.75em;
            font-weight: 600;
        }
    }
`
const ImgBox = styled.span`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    min-height: 100%;
    img {width: 100%;}
`

export const ProductCard = ({ product, setOrderList }) => {
    const { photoUrl, name, price, description } = product;
    const [quantity, setQuantity] = useState(0);
    const [triggerModal, setTriggerModal] = useState(false);

    const priceMask = (price) => {        
        if (price < 10) {
            return `R$ ${price?.toFixed(2).replace(".", ",")}`;
        } else {
            return `R$ ${price?.toFixed(2).replace(".", ",")}`;
        }
    }
    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) {
            if (cart.find((item) => item.id === product.id)) {
                setQuantity(cart.find((item) => item.id === product.id).quantity);
            }
        } else {
            setQuantity(0);
        }
    }, [product])

    return (        
        <DivCard>
            <ImgBox>
                <img src={photoUrl} alt={name} />
            </ImgBox>
            <div>
                <strong >{name}</strong>
                <p>{description}</p>
                <strong>{priceMask(price)}</strong>
            </div>
            <section>
                {quantity > 0 ? 
                    <button style={{borderRadius:"0 0.75em 0 0.5em"}}>{quantity}</button>
                : 
                    <button style={{borderRadius:"0 0.75em 0 0.5em",opacity:"0"}}>{quantity}</button>
                }

                {quantity > 0 ?
                    <button style={{borderRadius:"0.5em 0 0.75em 0",cursor:"pointer", color:"red"}} onClick={() => setTriggerModal(true)}>remover</button>
                :
                    <button style={{borderRadius:"0.5em 0 0.75em 0",cursor:"pointer"}} onClick={() => setTriggerModal(true)}>adicionar</button>
                }                
            </section>
            {triggerModal && <ModalQuantity quantity={quantity} setQuantity={setQuantity} setTriggerModal={setTriggerModal} product={product} setOrderList={setOrderList} />}
        </DivCard>
    )
}