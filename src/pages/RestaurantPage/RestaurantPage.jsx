import { useState, useEffect } from "react";
import { RestaurantDetailsGET, Headers } from "../../api/manifest";
import axios from "axios";
import { Header } from "../../components/Header/Header";

export default function RestaurantPage() {
    const [restaurant, setRestaurant] = useState({});
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        window.localStorage.setItem("restaurantId", "1");
        window.localStorage.setItem("tknFutureEats", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlbU1QdmlyeTB2UmhZWXUxVU1JIiwibmFtZSI6IkxpbGFUZXN0IiwiZW1haWwiOiJsaWxhdGVzdEBsaWxhdGVzdC5jb20iLCJjcGYiOiI2NjYuOTk5LjY2Ni05NiIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NTk1MzQ0NzF9.inc_tQdZqdL8Q-lj_G40pf_RKCIdy0AYspgaBJpo348");
    }, []);

    return (
        <div>
            <Header />
            
        </div>
    )
}