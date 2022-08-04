import styled from "styled-components"

const ContainerImg = styled.div `
    border: 1px solid pink;
    width: 100%;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

export const HomeCards = ({restaurant}) => {
    const {logoUrl, name, deliveryTime, shipping} = restaurant
    
    
    return(
        <>
            <ContainerImg>
                <img src={logoUrl} alt={name} style={{height: "100%"}} />
            </ContainerImg>
            <p>{name}</p>
            <p>{deliveryTime}</p>
            <p>{shipping}</p>


        </>
    )
}