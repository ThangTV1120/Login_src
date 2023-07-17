import React from 'react'
import { useForm, FormProvider, Resolver } from "react-hook-form"
import InputField from '../../../components/common/InputField'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { yupResolver } from "@hookform/resolvers/yup";
import loginvalidation from "../../../validation/Loginvalidation";
import PasswordField from '../../../components/common/PasswwordField';
import Button from '@mui/material/Button';
// import getALL from "../../../services/userAPI"
export default function LoginForm() {
  interface FormData {
    email: string;
    password: string;
  }
  // const { register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors }, } = useForm({
  //     resolver: yupResolver(loginvalidation),
  //   });
  const methods = useForm({
    resolver: yupResolver(loginvalidation),
  });
  const { formState: { errors } } = useForm({
    resolver: yupResolver(loginvalidation),
  })
  const onSubmit = (data: any) => {
    console.log(data);

  }

  return (
    <>
      <div className="container flex justify-center items-center flex-col mt-10">
        <div className="container_header">
          <div className="container_herder--icon flex justify-center items-center rounded-full w-[40px] h-[40px] mb-2 ml-1 bg-purple-700">
            <LockOutlinedIcon className="icon text-white " />
          </div>
          <span className="container_herder--context text-lg">Login in</span>
        </div>
        <div className="container_body" >
          <FormProvider {...methods}>
            <form className="container_body--form flex flex-col w-[452px]" onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="ip-email my-[10px] h-[45px] rounded w-full p-[7px] border-solid border-gray-400 border-2 focus:border-sky-600 focus:outline-none ">
                <InputField name="email" />
                {errors?.email && errors.email.message}
              </div>
              <div className="ip-pass my-[10px] h-[45px] rounded w-full p-[7px] border-solid border-gray-400 border-2 focus:border-sky-600 focus:outline-none">
                <PasswordField name="password" />
              </div>
              <Button className="w-full " type="submit" variant="contained">Sign In</Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </>

  )
}
