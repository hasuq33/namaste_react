export const checkValidateData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(password);

    if (!isEmailValid) return "Email ID is not Valid!";

    if (!isPasswordValid) return "Password is not Valid!";

    return null;
};
