import React from 'react'
import {getALL} from "../../../services/userAPI";
const LoginPage = async (data:any)=> {
    let result = await getALL();
    let ss = result.data.filter((db:any) => db.email === data.email && db.password === data.password);
    // console.log(ss);
    if (ss.length > 0) {
        alert("Dang nhap thanh cong ")
        return true;
        // return true;
        // toast.success("Dang nhap thanh cong");
    }
    else {
        // alert("Dang nhap that bai ")
        // toast.error("Dang nhap that bai ")
        console.log("Dang nhap that bai")
        return false;
    }
    // console.log(result );
    // console.log(data)
//   return (
//     <div>
      
//     </div>
//   )
}
export default LoginPage;
