import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { primaryColor, secondaryColor } from "../../theme/colors"
import { goToRestaurant } from "../../routes/Coordinator"

const Card = styled.div `
    width: 90vw;
    max-width: 400px;
    height: 188px;
    padding: 0 0 16px;
    box-sizing: border-box;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    display: grid;
    align-items: center;
    grid-template-rows: 120px 32px 32px;
    grid-template-areas:    'img img img img'
                            'nam nam nam nam'
                            'tim tim val val';
    & > p{
        margin: 0 1em;
        text-align: left;
    }
    #name{
        color: ${primaryColor};
        grid-area: nam;
    }
    #value{
        grid-area: val;
        text-align: right;
        color: ${secondaryColor};
    }
    #time{
        grid-area: tim;
        color: ${secondaryColor};
    }
                             
`

const Image = styled.div`
    height: 120px;
    grid-area: img;  
    & > img{
        border-radius: 8px 8px 0 0;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
`

export const HomeCards = ({restaurant}) => {
    const {logoUrl, name, deliveryTime, shipping, id} = restaurant
    const navigate = useNavigate()
    
    
    return(
        <div onClick={()=> goToRestaurant(navigate, id)}>
            <Card>
                <Image>
                    <img src={logoUrl} alt={name} />
                </Image>
            
            
            <p id="name">{name}</p>
            <p id="time">{deliveryTime - 10} - {deliveryTime} min</p>
            <p id="value">Frete R${shipping},00</p>
            </Card>

        </div>
    )
}