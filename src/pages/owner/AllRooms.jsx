
// import { MapPin, Star } from "lucide-react";
// import { useContext } from "react";
// import { AppContext } from "../../context/AppContext";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";

// const AllRooms = () => {
//   const { roomData, Navigate } = useContext(AppContext);

//   const deleteHotel = (id) => {
//     toast.success(`Deleted room ${id}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-3 pb-10 px-3 sm:px-6">
//       <div className="max-w-7xl mx-auto space-y-6">

//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white rounded-2xl shadow-md p-5 mt-2">
//           <div>
//             <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
//               Your All Rooms
//             </h1>
//             <p className="text-gray-600 text-sm md:text-base">
//               Manage Your Rooms Here
//             </p>
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             transition={{ ease: "easeInOut", duration: 0.3 }}
//             onClick={() => Navigate("/owner/add-room")}
//             className="bg-blue-800 text-white mt-4 md:mt-0 px-5 py-2 rounded-md text-sm md:text-base"
//           >
//             Add New Room
//           </motion.button>
//         </div>

//         {/* Room Display */}
//         <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
//           {/* Desktop Table */}
//           <div className="hidden md:block overflow-x-auto">
//             <table className="w-full table-fixed">
//               <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//                 <tr>
//                   <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider w-[14%]">Room Type</th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider w-[20%]">Location</th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider w-[12%]">Owner</th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider w-[13%]">Contact</th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider w-[8%]">Rating</th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider w-[10%]">Price/Night</th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider w-[10%]">Action</th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y divide-gray-100">
//                 {roomData?.map((room, index) => (
//                   <tr
//                     key={room._id || index}
//                     className={`hover:bg-blue-50 transition-all duration-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
//                   >
//                     {/* Hotel */}
//                     <td className="px-4 py-4">
//                       <div className="flex items-center space-x-3">
//                         <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
//                           <img
//                             src={room.images}
//                             alt={room?.roomType || "Room"}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <span className="font-semibold text-gray-800 text-sm">
//                           {room?.hotel?.name || "Unnamed Hotel"}
//                         </span>
//                       </div>
//                     </td>

//                     {/* Location */}
//                     <td className="px-4 py-4 text-gray-600 text-sm">
//                       <div className="flex items-start space-x-1">
//                         <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
//                         <span>{room?.hotel?.address || "No address"}</span>
//                       </div>
//                     </td>

//                     {/* Owner */}
//                     <td className="px-4 py-4 text-gray-600 text-sm">
//                       {room?.hotel?.ownerName || "N/A"}
//                     </td>

//                     {/* Contact */}
//                     <td className="px-4 py-4 text-gray-600 text-sm">
//                       {room?.hotel?.contactNumber || "N/A"}
//                     </td>

//                     {/* Rating */}
//                     <td className="px-4 py-4">
//                       <div className="flex items-center space-x-1">
//                         <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                         <span className="font-semibold text-gray-800">
//                           {room?.hotel?.rating ?? "—"}
//                         </span>
//                       </div>
//                     </td>

//                     {/* Price */}
//                     <td className="px-4 py-4 font-bold text-green-600 text-lg">
//                       ${room?.pricePerNight ?? "—"}
//                     </td>

//                     {/* Action */}
//                     <td className="px-4 py-4">
//                       <button
//                         onClick={() => deleteHotel(room._id)}
//                         className="bg-red-500 text-white px-4 py-1 rounded-full text-sm hover:bg-red-600 transition"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Mobile Card View */}
//           <div className="block md:hidden space-y-4">
//             {roomData?.map((room, index) => (
//               <div
//                 key={room._id || index}
//                 className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
//               >
//                 <div className="flex items-center space-x-3 mb-3">
//                   <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
//                     <img
//                       src={room?.image?.[0] || "/placeholder.jpg"}
//                       alt={room?.hotel?.name || "Hotel"}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800">
//                       {room?.hotel?.name || "Unnamed Hotel"}
//                     </h3>
//                     <div className="flex items-center text-yellow-500 text-sm">
//                       <Star className="w-4 h-4 mr-1 fill-current" />
//                       {room?.hotel?.rating ?? "—"}
//                     </div>
//                   </div>
//                 </div>

//                 <p className="text-sm text-gray-600 flex items-start space-x-1">
//                   <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
//                   <span>{room?.hotel?.address || "No address"}</span>
//                 </p>

//                 <div className="mt-2 text-sm text-gray-600">
//                   <p><span className="font-semibold">Owner:</span> {room?.hotel?.ownerName || "N/A"}</p>
//                   <p><span className="font-semibold">Contact:</span> {room?.hotel?.contactNumber || "N/A"}</p>
//                   <p className="text-green-600 font-bold text-base mt-1">
//                     ${room?.pricePerNight ?? "—"} / night
//                   </p>
//                 </div>

//                 <div className="mt-3 text-right">
//                   <button
//                     onClick={() => deleteHotel(room._id)}
//                     className="bg-red-500 text-white text-sm px-3 py-1 rounded-full hover:bg-red-600 transition"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllRooms;


import { MapPin, Star } from "lucide-react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const AllRooms = () => {
  const { roomData, Navigate } = useContext(AppContext);

  const deleteHotel = (id) => {
    toast.success(`Deleted room ${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-3 pb-10 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white rounded-2xl shadow-md p-5 mt-2">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Your All Rooms
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Manage Your Rooms Here
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            onClick={() => Navigate("/owner/add-room")}
            className="bg-blue-800 text-white mt-4 md:mt-0 px-5 py-2 rounded-md text-sm md:text-base"
          >
            Add New Room
          </motion.button>
        </div>

        {/* Room Display */}
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full table-fixed">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider w-[14%]">
                    Room Type
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider w-[20%]">
                    Location
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider w-[12%]">
                    Owner
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider w-[13%]">
                    Contact
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider w-[8%]">
                    Rating
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider w-[10%]">
                    Price/Night
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider w-[10%]">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {roomData?.map((room, index) => (
                  <tr
                    key={room._id || index}
                    className={`hover:bg-blue-50 transition-all duration-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    {/* Hotel */}
                    <td className="px-4 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={room.images}
                            alt={room?.roomType || "Room"}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-semibold text-gray-800 text-sm">
                          {room?.hotel?.name || "Unnamed Hotel"}
                        </span>
                      </div>
                    </td>

                    {/* Location */}
                    <td className="px-4 py-4 text-gray-600 text-sm">
                      <div className="flex items-start space-x-1">
                        <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                        <span>{room?.hotel?.address || "No address"}</span>
                      </div>
                    </td>

                    {/* Owner */}
                    <td className="px-4 py-4 text-gray-600 text-sm">
                      {room?.hotel?.ownerName || "N/A"}
                    </td>

                    {/* Contact */}
                    <td className="px-4 py-4 text-gray-600 text-sm">
                      {room?.hotel?.contactNumber || "N/A"}
                    </td>

                    {/* Rating */}
                    <td className="px-4 py-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-semibold text-gray-800">
                          {room?.hotel?.rating ?? "—"}
                        </span>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="px-4 py-4 font-bold text-green-600 text-lg">
                      ${room?.pricePerNight ?? "—"}
                    </td>

                    {/* Action */}
                    <td className="px-4 py-4">
                      <button
                        onClick={() => deleteHotel(room._id)}
                        className="bg-red-500 text-white px-4 py-1 rounded-full text-sm hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View (center aligned ✅) */}
          <div className="block md:hidden flex flex-col items-center space-y-4">
            {roomData?.map((room, index) => (
              <div
                key={room._id || index}
                className="w-full max-w-sm bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={room?.image?.[0] || "/placeholder.jpg"}
                      alt={room?.hotel?.name || "Hotel"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {room?.hotel?.name || "Unnamed Hotel"}
                    </h3>
                    <div className="flex items-center text-yellow-500 text-sm">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {room?.hotel?.rating ?? "—"}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 flex items-start space-x-1">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span>{room?.hotel?.address || "No address"}</span>
                </p>

                <div className="mt-2 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold">Owner:</span>{" "}
                    {room?.hotel?.ownerName || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold">Contact:</span>{" "}
                    {room?.hotel?.contactNumber || "N/A"}
                  </p>
                  <p className="text-green-600 font-bold text-base mt-1">
                    ${room?.pricePerNight ?? "—"} / night
                  </p>
                </div>

                <div className="mt-3 text-right">
                  <button
                    onClick={() => deleteHotel(room._id)}
                    className="bg-red-500 text-white text-sm px-3 py-1 rounded-full hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
