import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';

const Section = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 4em;
    border-bottom: solid 0.15em rgba(0, 0, 0, 0.2);
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: center;
        font-size: 1.5em;
        font-weight: bold;
        color: black;
    }
`

export const Header = () => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <Section>
            {location.pathname !== "/login" && location.pathname !== "/home" && location.pathname !== "/cart" && location.pathname !== "/profile" &&
                <BsChevronLeft size={24} style={{ cursor: "pointer", position: "absolute", left: "0.5em" }} />
            }
            {location.pathname === "/" && <h1>FutureEats</h1>}
            {location.pathname === "/search" && <h1>Busca</h1>}
            {location.pathname === "/cart" && <h1>Meu carrinho</h1>}
            {location.pathname === "/profile" && <h1>Meu perfil</h1>}
            {location.pathname === "/edit_user" && <h1>Editar</h1>}
            {location.pathname === "/address" && <h1>Endereço</h1>}
            {location.pathname === "/restaurant" && <h1>Restaurante</h1>}
        </Section>
    );
}