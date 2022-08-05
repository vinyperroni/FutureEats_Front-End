import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import profile from "../../assets/nav-icons/unselected/avatar.png"
import cart from "../../assets/nav-icons/unselected/shopping-cart.png"
import home from "../../assets/nav-icons/unselected/homepage.png"
import onProfile from "../../assets/nav-icons/selected/avatar.png"
import onCart from "../../assets/nav-icons/selected/shopping-cart.png"
import onHome from "../../assets/nav-icons/selected/homepage.png"

import { goToCart } from "../../routes/Coordinator";
import { goToHome } from "../../routes/Coordinator";
import { goToProfile } from "../../routes/Coordinator";


const NavContainer = styled.nav`
    width: 100%;
    height: 49px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6em;
    position: fixed;
    box-sizing: border-box;
    bottom: 0;
    box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
    background-color: #fff;
    & > div{
        & > img{
            cursor: pointer;
        }
    }
`

export default function NavFooter() {
    const location = useLocation()
    const navigate = useNavigate()

    return(
        
        <NavContainer>
            <div>
                {location.pathname === "/"
                ? 
                <img src={onHome} alt="SelectedHome-Icon" onClick={() => goToHome(navigate)}/>
                :  
                <img src={home} alt="Home-Icon" onClick={() => goToHome(navigate)}/>
                }
            </div>
            <div>
            {location.pathname === "/cart"
                ? 
                <img src={onCart} alt="SelectedCart-Icon" onClick={() => goToCart(navigate)}/>
                :  
                <img src={cart} alt="Cart-Icon" onClick={() => goToCart(navigate)}/>
                }
            </div>
            <div>
            {location.pathname === "/profile"
                ? 
                <img src={onProfile} alt="SelectedProfile-Icon" onClick={() => goToProfile(navigate)}/>
                :  
                <img src={profile} alt="Profile-Icon" onClick={() => goToProfile(navigate)}/>
                }
            </div>

        </NavContainer>
    )
}