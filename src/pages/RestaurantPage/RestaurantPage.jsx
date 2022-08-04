import { useState, useEffect } from "react";
import { RestaurantDetailsGET, Headers } from "../../api/manifest";
import axios from "axios";
import styled from "styled-components";
import { Header } from "../../components/Header/Header";

const SectionTitle = styled.section`
    display: flex;
    flex-direction: column;
    width: 95%;
    height: fit-content;
    img {
        width: 100%;
        height: 5em;
        object-fit: cover;
        border-radius: 0.5em 0.5em 0 0;
    }
    strong {
        width: 100%;
        font-size: 1.25em;
        font-weight: 600;
        color: black;
    }
    p {
        width: 100%;
        margin: 0.25em 0;
        font-size: 1.2em;
        font-weight: 400;
        color: black;
    }
`
const SectionCategory = styled.section`
    display: flex;
    width: 95%;
    height: fit-content;
    border: solid;
    img {
        width: 100%;
        height: 5em;
        object-fit: cover;
        border-radius: 0.5em 0.5em 0 0;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding: 0.5em;
        border: solid;
        border-radius: 0.5em 0.5em 0 0;
        background-color: white;
    }
`

export default function RestaurantPage() {
    const [restaurant, setRestaurant] = useState();

    useEffect(() => {
        axios.get(RestaurantDetailsGET, {headers: Headers})
        .then(response => {
            setRestaurant(response.data.restaurant);
        })
        .catch(error => {
            console.log("Erro: "+error);
        });
    }, []);

    return (
        <div style={{display: "flex",flexDirection:"column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%"}}>
            <Header />
            <SectionTitle>
                <img src={restaurant.logoUrl} alt="restaurant" />
                <strong>{restaurant.name}</strong>
                <p>{restaurant.category}</p>
                <div style={{display:"flex",alignItems:"flex-start",justifyContent:"center",width:"100%"}}>
                    <p>{restaurant.deliveryTime} - {restaurant.deliveryTime+10} min</p>
                    <p>Frete: R${restaurant.shipping},00</p>
                </div>
                <p>{restaurant.address}</p>
            </SectionTitle> 
            <SectionCategory>
                <img src="" alt="" />
                <div>
                    <p>{restaurant.description}</p>
                </div>
            </SectionCategory>           
        </div>
    )
}