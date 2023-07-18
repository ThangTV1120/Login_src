import React from 'react'
// import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
// const loginvalidation = yup.object().shape({
//   email: yup.string().email("email ko hop le").required("Ban phai nhap email"),
//   password: yup.string().required("Ban phai nhap password")
// })
const loginvalidation= yup.object().shape({
  email: yup
    .string()
    .required("Please enter email")
    .matches(
      /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@gmail\.com$/,
      "Invalid email format"
    ) as yup.StringSchema<string>,
  password: yup
    .string()
    .required("Please enter password")
    .min(7, "Password is too short")
    .matches(
      /^[^\u00C0-\u017F]+$/,
      "Invalid password format"
    ),
});
export default loginvalidation;
