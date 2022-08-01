import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from '../pages/CartPage/CartPage';
import EditUserPage from '../pages/EditUserPage/EditUserPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import RestaurantPage from '../pages/RestaurantPage/RestaurantPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import SignUpAddressPage from '../pages/SignUpAddressPage/SignUpAddressPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route index element={ <HomePage /> } />
            <Route path='/login' element={ <LoginPage /> } />
            <Route path='/signup' element={ <SignUpPage /> } />
            <Route path='/address' element={ <SignUpAddressPage /> } />
            <Route path='/restaurant/:id' element={ <RestaurantPage /> } />
            <Route path='/cart' element={ <CartPage /> } />
            <Route path='/profile' element={ <ProfilePage /> } />
            <Route path='/search' element={ <SearchPage /> } />
            <Route path='/edit_user' element={ <EditUserPage /> } />
            <Route path='*' element={ <ErrorPage /> } />
        </Routes>
    </BrowserRouter>
}