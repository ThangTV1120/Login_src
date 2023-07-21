import axios from "./commonAPI";
interface account {
    email:string,
    password:string
}
const getALL=()=>{
    return axios.get("/user");
}
const postUser=(email:string,password:string)=>{
    return axios.post(`/api/auth/login`,{email:email,password:password});
}
export {getALL,postUser}