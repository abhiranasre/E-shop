// import './regs.css';
import img from '../images/wearrit.jpg'
import { useNavigate, Navigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../action/User.action';




const Login =()=>{
    // const[msg, setMsg] = useState("")
    const dispatch = useDispatch();
    const [user, setUser] = useState({
      email: '', password: ''
    });
    const { loading,
      isAuthenticated, error } = useSelector(state => state.auth)


    const setValues = (event) => {
        
      setUser({...user,[event.target.name]:event.target.value})
    
      }

    //   const Submit =(event)=>{

    //     event.preventDefault();
    //     console.log(value);
    
    //     axios.post('http://localhost:5000/login', value)
    //     .then((res) => {     
    //       console.log("backend response",res.data);   
    //       if (res.data.success === true) {
    //         toast.success('🦄 You have logged in successfully!', {
    //           position: "top-right",
    //           autoClose: 2000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //         });
    //       }
    //       localStorage.setItem('token', res.data.data.token);
    //       chng1();
    //     }).catch((error) => {
    //         console.log(error)
    //         // alert("an error occured");
    //     });
      
    
    //   } 
    let navigate = useNavigate(); 
    // const chng = () =>{ 
    //       let path = `/Register`; 
    //       navigate(path);
    //     }
    const chng1 =()=>{
      let path =`/`;
      navigate(path)
    }
    useEffect(() => {

      if (error) {

          toast.error('Either Username or Password is wrong!', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
          });
          <Navigate to='/Login' />
      }

      if (isAuthenticated) {

          // <Navigate to="/Register" />
          chng1();
      }

  }, [isAuthenticated, error])
    function Submit(e) {
      e.preventDefault();
      dispatch(login(user))

  }
       

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src={img} alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link to={'/Register'}><a href="/" className="font-medium text-red-600 hover:text-red-500"> Sign Up </a>
            </Link> </p>
        </div>
        <form onSubmit={Submit} className="mt-8 space-y-6" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">Email </label>
              <input value={user.email} onChange={setValues} id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input value={user.password} onChange={setValues} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
            </div>

            <div className="text-sm">
              <Link to={'/forgot'}><a href="/" className="font-medium text-red-600 hover:text-red-500"> Forgot your password? </a></Link>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-red-500 group-hover:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login;


