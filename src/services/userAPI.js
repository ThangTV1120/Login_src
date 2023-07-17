import axios from "./commonAPI";
const getALL=()=>{
    return axios.get("/user");
}
export {getALL}