export const Header = {
    "Content-Type": "application/json",
    auth: window.localStorage.getItem("tknFutureEats")
}

export const BaseURL = `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA`;

export const LoginPOST = `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login`;

export const SignupPOST = `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup`;

export const AddAddressPUT = `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address`;

export const FullAddressGET = `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile/address`;

export const ProfileGET = `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile`;

export const UpdateProfilePUT = `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile`;

export const ListRestaurantGET = `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants`;

export const RestaurantDetailsGET = `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/:${window.localStorage.getItem("restaurantId")}`;

export const PlaceOrderPOST = `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/:${window.localStorage.getItem("restaurantId")}/order`;

export const ActiveOrderGET = `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/active-order`;

export const OrdersHistoryGET = `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/orders/history`;