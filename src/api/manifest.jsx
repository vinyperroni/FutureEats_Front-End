export const Headers = {
    "Content-Type": "application/json",
    auth: window.localStorage.getItem("tknFutureEats")
}

const BaseURL = `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA`;

export const LoginPOST = `${BaseURL}/login`;

export const SignupPOST = `${BaseURL}/signup`;

export const AddAddressPUT = `${BaseURL}/address`;

export const FullAddressGET = `${BaseURL}/profile/address`;

export const ProfileGET = `${BaseURL}/profile`;

export const UpdateProfilePUT = `${BaseURL}/profile`;

export const ListRestaurantGET = `${BaseURL}/restaurants`;

export const RestaurantDetailsGET = `${BaseURL}/restaurants/:${window.localStorage.getItem("restaurantId")}`;

export const PlaceOrderPOST = `${BaseURL}/restaurants/:${window.localStorage.getItem("restaurantId")}/order`;

export const ActiveOrderGET = `${BaseURL}/active-order`;

export const OrdersHistoryGET = `${BaseURL}/orders/history`;