import { useState } from "react"
import { Link } from "react-router-dom"



export default function AddItems(){

    const [proKey,setKey] = useState("");
    const [proName,setName] = useState("");
    const [proPrice,setPrice] = useState("");

    function addItems(){
        console.log(proKey,proName,proPrice)
    }
    return(
        <div className="max-w-full w-full h-full flex justify-center items-center flex-col gap-5">

            {/* Add Product Section */}
<div className="p-6 bg-gradient-to-r from-[#f3c4c4] to-[#f3a8a8] rounded-lg shadow-lg">
    <span className="text-2xl font-bold text-gray-800">Add Product</span>

    {/* Product Details */}
    <div className="mt-6 max-w-[1000px] w-full bg-white p-6 rounded-lg shadow-xl">

        {/* Product Key */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="sm:w-1/3 w-full">
                <label className="text-lg font-semibold text-gray-700 mb-2">Product Key</label>
                <input type="text" className="w-full p-3 text-sm border border-[#dfa4a4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#dfa4a4]" placeholder="Enter Your Product Key" onChange={(e)=>{
                    setKey (e.target.value)
                }}/>
            </div>

            {/* Product Name */}
            <div className="sm:w-1/3 w-full">
                <label className="text-lg font-semibold text-gray-700 mb-2">Product Name</label>
                <input type="text" className="w-full p-3 text-sm border border-[#dfa4a4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#dfa4a4]" placeholder="Enter Your Product Name" onChange={(e)=>{
                    setName (e.target.value)
                }}/>
            </div>

            {/* Product Price */}
            <div className="sm:w-1/3 w-full">
                <label className="text-lg font-semibold text-gray-700 mb-2">Product Price</label>
                <input type="text" className="w-full p-3 text-sm border border-[#dfa4a4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#dfa4a4]" placeholder="Enter Your Product Price" onChange={(e)=>{
                    setPrice(e.target.value)
                }}/>
            </div>
        </div>

        {/* Product Type */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="sm:w-1/3 w-full">
                <label className="text-lg font-semibold text-gray-700 mb-2">Product Type</label>
                <input type="text" className="w-full p-3 text-sm border border-[#dfa4a4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#dfa4a4]" placeholder="Enter Your Product Type"/>
            </div>

            {/* Product Dimensions */}
            <div className="sm:w-1/3 w-full">
                <label className="text-lg font-semibold text-gray-700 mb-2">Product Dimensions</label>
                <input type="text" className="w-full p-3 text-sm border border-[#dfa4a4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#dfa4a4]" placeholder="Enter Your Product Dimensions"/>
            </div>

            {/* Product Description */}
            <div className="sm:w-1/3 w-full">
                <label className="text-lg font-semibold text-gray-700 mb-2">Product Description</label>
                <textarea className="w-full p-3 text-sm border border-[#dfa4a4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#dfa4a4]" placeholder="Enter Your Product Description" rows="4"></textarea>
            </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-end gap-3">
            <button className="px-6 py-3 bg-[#936969] text-white font-semibold text-lg rounded-lg hover:bg-[#d17f7f] focus:outline-none focus:ring-2 focus:ring-[#dfa4a4] cursor-pointer" onClick={addItems}>
                Add Product
            </button>
            
            <Link to= "/admin/items">
            <button className="px-6 py-3 bg-[#de5e5e] text-white font-semibold text-lg rounded-lg hover:bg-[#d17f7f] focus:outline-none focus:ring-2 focus:ring-[#dfa4a4] cursor-pointer">
                Back
            </button>
            </Link>
        </div>
    </div>
</div>

        
        </div>
    )
}