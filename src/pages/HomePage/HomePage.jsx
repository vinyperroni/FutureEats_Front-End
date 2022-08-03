import { useEffect, useState } from "react"
import { TextField } from "@mui/material"
import InputAdornment from "@mui/material/InputAdornment"
import { Search } from "@mui/icons-material"
import BlackScreen from "../../components/BlackScreen/BlackScreen"
import axios from "axios"
import { Headers, ListRestaurantGET } from "../../api/manifest"

export default function HomePage() {
    const [screenOn, setScreenOn] = useState(true)
    const [restaurants, setRestaurants] = useState()

    const renderBlackScreen = ()=>{
        if(screenOn){
            return <BlackScreen show={true} />
        }else{
            return <BlackScreen show={false} />
        }
    }

    const changeBlackScreen = ()=>{
        setScreenOn(false);
    }

    setTimeout(changeBlackScreen, 3000);
    
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlbU1QdmlyeTB2UmhZWXUxVU1JIiwibmFtZSI6IkxpbGFUZXN0IiwiZW1haWwiOiJsaWxhdGVzdEBsaWxhdGVzdC5jb20iLCJjcGYiOiI2NjYuOTk5LjY2Ni05NiIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NTk1MzQ0NzF9.inc_tQdZqdL8Q-lj_G40pf_RKCIdy0AYspgaBJpo348"
    
    const getRestaurants = () => {
        axios
        .get( ListRestaurantGET, {
            headers: {
            "Content-Type": "application/json",
            auth: token
        }})
    .then((res)=>{
    setRestaurants(res.data.restaurants)
    console.log("taindo")
    })
    .catch((err)=>{
        console.log(err.message)
    })
    }
    
    useEffect(()=>{
        getRestaurants()
    },[])

    console.log(restaurants)
    const restaurantCategory = restaurants && restaurants.map((r)=>{
        return(<p>{r.category}</p>)
    })
    return <div>
        {renderBlackScreen()}
        <h1>Home - Feed</h1>
        <TextField
            id="outlined-search"
            placeholder="Restaurantes"
            type="search"
            InputProps={{
                startAdornment: <InputAdornment position="start"><Search/></InputAdornment>,
              }}
            />
            {restaurantCategory}
    </div>
}