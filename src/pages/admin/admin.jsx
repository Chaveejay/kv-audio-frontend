import { MdDashboard } from "react-icons/md";
import { RiSurroundSoundFill } from "react-icons/ri";
import { MdReviews } from "react-icons/md";
import Logo from "../../assets/Logo.png"
import { FaUser } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { Routes,Route,Link } from "react-router-dom";
import AdminItems from "./adminItems";
import AddItems from "./addItems";


export default function Admin() {
    return (

        <div className="w-full h-screen bg-gray-100 flex">
          
            {/* button container */}
            <div className="h-full max-w-[300px] w-full bg-[#202531] flex flex-col gap-[10px] items-center  pt-4 ">
                {/* Logo */}
                <div className="w-full flex items-center gap-4 pl-2 pr-2">
                <img src={Logo} className="w-15 h-15"></img>
                <span className="text-white text-2xl text-center font-bold">Admin Center </span>
                </div>
                <hr className="border-t-1 border-white my-1 w-full" />

             {/* buttons */}   
             <div className="flex-row  w-full pl-4">

        <button className="flex justify-self-start text-xl font-bold h-fit  p-1.5 text-white w-40 cursor-pointer hover:text-[#484e5a]"><MdDashboard className="mr-4 mt-1 "/> Dashboard</button>

        <button className="flex justify-self-start text-xl font-bold h-fit  p-1.5 text-white w-40 cursor-pointer hover:text-[#484e5a]"><FaBookmark className="mr-4 mt-1 "/> Bookings</button>

        <Link to ="/admin/items" className="flex justify-self-start text-xl font-bold h-fit  p-1.5 text-white w-40 cursor-pointer hover:text-[#484e5a]"><RiSurroundSoundFill className="mr-4 mt-1 "/> Items</Link>

        <button className="flex justify-self-start text-xl font-bold h-fit  p-1.5 text-white w-40 cursor-pointer hover:text-[#484e5a]"><MdReviews className="mr-4 mt-1 "/> Reviews</button>

        <button className="flex justify-self-start text-xl font-bold h-fit  p-1.5 text-white w-40 cursor-pointer hover:text-[#484e5a]"><FaUser className="mr-4 mt-1 "/> Users</button>
        <div className=""></div>
            </div>  
            </div>
        

        <div className="max-w-[calc(100vw-300px)] w-full  bg-[#F3F4F6]">
        <Routes path="/*">
        <Route path = "/items" element = {<AdminItems/>}/>
        <Route path = "/items/additems" element = {<AddItems/>}/>

        
        </Routes>
        </div>
        </div>
    )
}