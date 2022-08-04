import { ContainerImg } from "./styled"



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