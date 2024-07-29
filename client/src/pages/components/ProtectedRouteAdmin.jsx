import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const ProtectedRouteAdmin = ({ element: AdminDash, ...rest }) => {
  const url = "https://svgbackendv1.onrender.com";
  // const url = "http://localhost:5000";
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      //const token = Cookies.get('token');
      //console.log(token);//Why are we retreiving the token?

      //I am not sending the token to the server... nor I am using the token..
      //I just need to verify that token is set or not...

      //Or I can make an API request to directly get the token from the server...
      //If we got a token then we can go further with verify admin token

      // if (!token) {
      //   setIsAuthenticated(false);
      //   setLoading(false);
      //   return;
      // }

      try {
        const res = await axios.get(`${url}/api/admin/verify-admin-token`, {
           withCredentials: true });
        if (res.status === 200) {
          console.log("admin verified");
          setIsAuthenticated(true);
        } else {
          console.log("not verified");
          setIsAuthenticated(false);
        }
      } catch (e) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
    
  }, []);

  
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return isAuthenticated ? <AdminDash {...rest} /> : <Navigate to="/admin" />;
};

export default ProtectedRouteAdmin;
