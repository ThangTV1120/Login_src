import axios from "axios";
// import React from 'react'

const instance = axios.create({
    // baseURL: 'http://localhost:3001',
    baseURL:'http://150.95.111.42:3000',
  });
export default instance;