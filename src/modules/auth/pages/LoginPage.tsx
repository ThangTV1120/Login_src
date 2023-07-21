import React from 'react'
import { getALL, postUser } from "../../../services/userAPI";
import { useAppDispatch, useAppSelector } from '../../../redux';
import { USER_LOGIN } from "../../../redux/reducers/user.slice"
const LoginCheck = async (data: any) => {
    let result = await getALL();
    let ss = result.data.filter((db: any) => db.email === data.email && db.password === data.password);
    // console.log(ss);
    if (ss.length > 0) {
        alert("Dang nhap thanh cong ")
        return true;
    }
    else {
        console.log("Dang nhap that bai")
        return false;
    }

}
const LoginUser = async (data: any) => {
 
    try {
        let result = await postUser(data.email, data.password);
        if (!result.data.success) {
            throw new Error(result.data.error)
        }
        console.log("Thanh cong");
        return result;
    }
    catch (error: any) {
        console.error(error)
        return null;
    }


    // if (result.status === 200 && result.data) {
    //     if (!result.data.success) {
    //         alert(result.data.error);
    //     }
    //     else { 
    //         alert("Thanh cong ");
    //        return result.data;
    //      }
    // }
    // else {
    //     console.log("Dang nhap that bai")
    // }


}
export { LoginCheck, LoginUser };
