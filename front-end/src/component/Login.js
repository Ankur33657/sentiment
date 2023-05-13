import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import Footer from './Footer';
const Login=()=>{
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');
  const navigate=useNavigate();
    useEffect(()=>{
      const auth=localStorage.getItem('user');
      if(auth){
        navigate('/');
      }
    })
  const handleLogin=async()=>{
    let result=await fetch('http://localhost:5500/login',{
      method:'post',
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    result=await result.json();
    if(result.name){
localStorage.setItem("user",JSON.stringify(result));
     navigate('/')
    }
    else{
      alert("please entered valid id or password");
    }
  }
  return(
    <>

   <section  class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid" alt=""/>
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
         
          <div class="form-outline mb-4">
            <input type="email" id="form1Example13" class="form-control form-control-lg" 
            onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <label class="form-label" for="form1Example13">Email address</label>
          </div>

         
          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg"
             onChange={(e)=>setPassword(e.target.value)} value={password} />
            <label class="form-label" for="form1Example23">Password</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
          
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

         
          <button onClick={handleLogin} type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

         

        </form>
      </div>
    </div>
  </div>
</section>


    </>
  )
}
export default Login