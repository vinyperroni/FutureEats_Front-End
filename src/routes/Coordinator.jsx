export const goToHome = (navigate) => {
    navigate('/');
}

export const goToLogin = (navigate) => {
    navigate('/login');
}

export const goToSignUp = (navigate) => {
    navigate('/signup');
}

export const goToAddress = (navigate) => {
    navigate('/address');
}

export const goToRestaurant = (navigate, id) => {
    navigate(`/restaurant/${id}`);
}

export const goToSearch = (navigate) => {
    navigate('/search');
}

export const goToProfile = (navigate) => {
    navigate('/profile');
}

export const goToCart = (navigate) => {
    navigate('/cart');
}

export const goToEditUser = (navigate) => {
    navigate('/edit_user');
}

export const goBack = (navigate) => {
    navigate(-1);
}