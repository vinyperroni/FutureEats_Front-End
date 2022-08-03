import { useState, useEffect } from "react";
import { RestaurantDetailsGET, Headers } from "../../api/manifest";
import axios from "axios";
import { Header } from "../../components/Header/Header";

export default function RestaurantPage() {
    const [restaurant, setRestaurant] = useState({});
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        
    }, []);

    return (
        <div>
            <Header />
            
        </div>
    )
}