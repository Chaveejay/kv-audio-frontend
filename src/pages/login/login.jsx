import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    async function handleOnSubmit(e){
      e.preventDefault();
      console.log(email,password)
  try{
    const res =await axios.post("http://localhost:3000/api/users/login",{
        email: email,
        password :password
    })
    console.log(res)
    toast.success(res.data.message);
    const user =res.data.user
    localStorage.setItem("token",res.data.token)

    if(user.role === "admin"){
      navigate("/admin")
    }else{
      navigate("/user")
    }
  }
  catch(err){
    toast.error(err.response.data.error)
  }
      
  }
    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <title>Login</title>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        
        <form className="space-y-4" onSubmit={handleOnSubmit}>
          <div>
          
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="text" 
              id="username" 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-center items-center mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full cursor-pointer">
              Login
            </button>
          </div>
          
          <div className="mt-2 text-center">
            <button className="text-blue-500 hover:underline cursor-pointer">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
    )
}