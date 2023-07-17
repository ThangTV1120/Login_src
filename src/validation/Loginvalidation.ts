import React from 'react'
// import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
const loginvalidation = yup.object().shape({
  email: yup.string().email("email ko hop le").required("Ban phai nhap email"),
  password: yup.string().required("Ban phai nhap password")
})
export default loginvalidation;
