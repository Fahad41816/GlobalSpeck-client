import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Authcontext } from '../context/Authprovider';

const axiosSecure = axios.create({
  baseURL: 'https://globespeck.vercel.app', 
});

const useAxiosSecure = () => {
  const { logoutuser } = useContext(Authcontext); 
  const navigate = useNavigate(); 

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logoutuser();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logoutuser, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;