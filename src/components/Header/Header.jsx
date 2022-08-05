import styled from 'styled-components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { goBack } from "../../routes/Coordinator";

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
        font-weight: 500;
        color: black;
    }
`

export const Header = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const location = useLocation();

    return (
        <Section>
            {location.pathname !== "/login" && location.pathname !== "/home" && location.pathname !== "/cart" && location.pathname !== "/profile" &&
                <ChevronLeftIcon onClick={() => goBack(navigate)} style={{ cursor: "pointer", fontSize: "2em", position: "absolute", left: "0.25em" }} />
            }
            {location.pathname === "/search" && <h1>Busca</h1>}
            {location.pathname === "/cart" && <h1>Meu carrinho</h1>}
            {location.pathname === "/profile" && <h1>Meu perfil</h1>}
            {location.pathname === "/edit_user" && <h1>Editar</h1>}
            {location.pathname === "/address" && <h1>Endereço</h1>}
            {location.pathname === `/restaurant/${id}` && <h1>Restaurante</h1>}
            {location.pathname === "/" && <h1>FutureEats</h1>}
        </Section>
    );
}