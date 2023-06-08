import { useContext, useEffect, useState } from "react";

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import SocalLogin from '../shared/socialLogin/SocalLogin';
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
  
    const [disabled,setDisabled]=useState(true)
    const {signIn}=useContext(AuthContext)
    const navigate=useNavigate();
    const location=useLocation()
    const from = location.state?.from?.pathname || "/";
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        signIn(email,password).then(result=>{
          const user=result.user;
          console.log(user);
          Swal.fire({
            title: 'user login successful',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          navigate(from, { replace: true });
        })
    }
    const handleCaptcha=(e)=>{
        const user_captcha_value=e.target.value;
        // console.log(value);
        if (validateCaptcha(user_captcha_value)==true) {
            setDisabled(false)
            alert('Captcha Matched');
        }
        else{
            setDisabled(true)
            alert('Captcha did not  Match');
        }

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
              onBlur={handleCaptcha}
              name="captcha"
                type="text"
                placeholder="type the text above"
                className="input input-bordered"
                required
              />
            

            </div>
            <div className="form-control mt-6">
              
              <input type="submit" value="Login"  className="btn btn-primary" disabled={false}/>
            </div>
          </form>
          <p><small>New Here?<Link to='/signup'>Create an Account</Link></small></p>
          <SocalLogin></SocalLogin>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;