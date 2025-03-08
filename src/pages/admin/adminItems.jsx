import { Link } from "react-router-dom"

export default function AdminItems(){
    return(
        <div>
        {/* Product Table Section */}
    <div className="mt-10 bg-white p-6 rounded-lg shadow-xl">
        <div className="flex justify-between items-center mb-6">
            <span className="text-2xl font-bold text-gray-800">Product List</span>

            {/* Add New Product Button */}
            <Link to="/admin/items/additems">
            <button className="px-6 py-3 bg-[#dfa4a4] text-white font-semibold text-lg rounded-lg hover:bg-[#d17f7f] focus:outline-none focus:ring-2 focus:ring-[#dfa4a4] cursor-pointer">
                Add New Product
            </button></Link>
        </div>

        {/* Product Table */}
        <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
                <tr className="bg-[#f3a8a8] text-white">
                    <th className="p-3 text-left">Product Key</th>
                    <th className="p-3 text-left">Product Name</th>
                    <th className="p-3 text-left">Product Price</th>
                    <th className="p-3 text-left">Product Type</th>
                    <th className="p-3 text-left">Product Dimensions</th>
                    <th className="p-3 text-left">Product Description</th>
                    <th className="p-3 text-left">Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* Example Row */}
                <tr className="bg-gray-50 border-t border-gray-300">
                    <td className="p-3">123ABC</td>
                    <td className="p-3">Example Product</td>
                    <td className="p-3">$49.99</td>
                    <td className="p-3">Electronics</td>
                    <td className="p-3">10x5x3 cm</td>
                    <td className="p-3">This is an example product description.</td>
                    <td className="p-3">
                        <button className="text-blue-500 hover:underline cursor-pointer">Edit</button> | 
                        <button className="text-red-500 hover:underline cursor-pointer">Delete</button>
                    </td>
                </tr>
                {/* Add more rows dynamically */}
            </tbody>
        </table>
    </div>
        

        </div>

    )
}