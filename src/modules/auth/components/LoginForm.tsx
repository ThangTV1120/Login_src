import React, { useState, useEffect } from 'react'
import { useForm, FormProvider, Resolver,SubmitHandler } from "react-hook-form"
import InputField from '../../../components/common/InputField'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { yupResolver } from "@hookform/resolvers/yup";
import loginvalidation from "../../../validation/Loginvalidation";
import PasswordField from '../../../components/common/PasswwordField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
// import getALL from "../../../services/userAPI"
import { LoginCheck, LoginUser } from '../pages/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/rootReducers';
import { LoginRedux } from "../../../redux/action/userAction";
import { useAppDispatch,useAppSelector } from '../../../redux';
import {USER_LOGIN} from "../../../redux/reducers/user.slice"
export interface FormData {
  email: string;
  password: string;
}
export function LoginForm() {

  // const dispatch = useDispatch();
  // const data = useSelector((state: RootState) => state.user.token);
  // console.log(data);
  // const { register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors }, } = useForm({
  //     resolver: yupResolver(loginvalidation),
  //   });
  const methods = useForm<FormData>({
    resolver: yupResolver(loginvalidation),
  });
  const { reset } = methods;
  // const onSubmit :SubmitHandler<FormData> = async (data: FormData)
  const dispatch = useAppDispatch();
  const onSubmit = async (data: FormData) => {
   
    let u= await LoginUser(data);
    console.log(u);
    if(u){
      dispatch(USER_LOGIN({token:u.data.access_token,user:u.data.user}));
    }
 
    // console.log(u)
    // console.log(data)
    // console.log(resss)  
    // if(resss)
    //   dispatch(USER_LOGIN(data))
    // reset();
    // console.log(resss)
    // if (resss) {
    //   reset();
    // }
    // console.log(data.email);
    // LoginUser(data);
    // let token="fasfadfasdf222";
    // dispatch(LoginRedux(data));

  }
  const restData = () => {
    let dataaa: FormData = {
      email: "",
      password: "",
    }
    reset(dataaa);
  }

  return (
    <>
      <div className="container flex justify-center items-center flex-col mt-10 m-auto max-w-[500px]">
        <div className="container_header mb-[20px]">
          <div className="container_herder--icon flex justify-center items-center rounded-full w-[40px] h-[40px] mb-2 ml-1 bg-purple-700">
            <LockOutlinedIcon className="icon text-white " />
          </div>
          <span className="container_herder--context text-lg">Login in</span>
        </div>
        <div className="container_body w-full " >
          <FormProvider {...methods}>
            <form className="container_body--form flex justify-center text-center flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
              {/* <div className="ip-email my-[10px] h-[45px] rounded w-full p-[7px] border-solid border-gray-400 border-2 focus:border-sky-600 focus:outline-none "> */}
              <div className='form-email relative'>
                <div className=' ip-email mb-3 rounded w-full border-solid  focus:border-sky-600 focus:outline-none'>
                  <InputField name="email" label="Email Address *" />
                </div>
                {/* <span className="placeholder absolute pointer-events-none top-[5%] left-[15px] translate-y-[50%] text-slate-500 select-none">Email Address *</span> */}
              </div>

              <div className='form-password relative'>
                <div className='ip-pass mb-3 rounded w-full border-solid focus:border-sky-600 focus:outline-none'>
                  <PasswordField name="password" label="Password *" type='password' />
                </div>
                {/* <span className="placeholder absolute pointer-events-none top-[5%] left-[15px] translate-y-[50%] text-slate-500 select-none">Password *</span> */}
              </div>
              <div className="flex items-center mb-1">
                <Checkbox className="w-[28px] p-0" />
                <span className="ml-[5px]">Remember me</span>
              </div>
              <Button className="w-full " type="submit" variant="contained">Sign In</Button>
              <div className="flex justify-between mt-3 text-xs ">
                <Link href="#" underline="always">
                  {`Forgot password?`}
                </Link>
                <Link href="#" underline="always" >
                  {`Don't have an account? Sign Up`}
                </Link>
              </div>
            </form>
          </FormProvider>
        </div>
        <div className="container_footer mt-[30px] text-sm">
          <span>Copyright © <u>Your Website</u> 2023</span>
        </div>
      </div>
    </>

  )
}
