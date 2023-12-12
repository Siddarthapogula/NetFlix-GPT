export const chechValidity = (email, password)=>{
    const checkEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const checkPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})\S$/.test(password);

    if(!checkEmail){
        return "Email is not valid";
    }
    if(!checkPassword){
        return "Password is not valid";
    }

    return null;

}