export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case 'AUTH':
      localStorage.setItem('USER_TOKEN', payload);
      break;
    case 'SET_USER':
      return { ...state, userData: payload };
    case 'AUTHENTICATE_USER':
      return { ...state, isUserAuthenticated: payload };
    default:
      break;
  }
};
