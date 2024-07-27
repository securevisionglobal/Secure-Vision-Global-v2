import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const ProtectedRouteAdmin = ({ element: AdminDash, ...rest }) => {
  const url = "https://svgbackendv1.onrender.com";
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get('token');

      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`${url}/api/admin/verify-admin-token`, { withCredentials: true });
        if (res.status === 200) {
          setIsAuthenticated(true);
        } else {
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
