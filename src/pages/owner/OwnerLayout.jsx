// import { useContext } from "react";
// import { Link, Outlet } from "react-router-dom";
// import { AppContext } from "../../context/AppContext";
// import toast from "react-hot-toast";
// import { assets } from "../../assets/assets.js";
// import { Warehouse, CalendarArrowDown } from "lucide-react";
// const OwnerLayout = () => {
//   const { owner, setowner, Navigate } = useContext(AppContext);
//   const dashboardicon = (
//     <svg
//       className="w-6 h-6"
//       aria-hidden="true"
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       fill="none"
//       viewBox="0 0 24 24"
//     >
//       <path
//         stroke="currentColor"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z"
//       />
//     </svg>
//   );

//   const sidebarLinks = [
//     { name: "Dashboard", path: "/owner", icon: dashboardicon },
//     { name: "Rooms", path: "/owner/rooms", icon: <Warehouse /> },
//     { name: "Bookings", path: "/owner/bookings", icon: <CalendarArrowDown /> },
//   ];
//    const logout = async () => {
     
//          setowner(false);
//         toast.success("Logout successfully")
//    };
//   return (
//     <>
//       <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
//         <Link to={"/owner"}>
//           <img className="h-9" src={assets.logo} alt="dummyLogoColored" />
//         </Link>
//         <div className="flex items-center gap-5 text-gray-500">
//           <p>Hi! Owner</p>
//           <button
//             onClick={logout}
//             className="border rounded-full text-sm px-4 py-1"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       <div className="flex">
//         <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
//           {sidebarLinks.map((item, index) => (
//             <Link
//               to={item.path}
//               key={index}
//               className={`flex items-center py-3 px-4 gap-3 
//                             ${
//                               index === 0
//                                 ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-500"
//                                 : "hover:bg-gray-100/90 border-white text-gray-700"
//                             }`}
//             >
//               {item.icon}
//               <p className="md:block hidden text-center">{item.name}</p>
//             </Link>
//           ))}
//         </div>
//         <Outlet />
//       </div>
//     </>
//   );
// };
// export default OwnerLayout;

import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { assets } from "../../assets/assets.js";
import { Warehouse, CalendarArrowDown } from "lucide-react";

const OwnerLayout = () => {
  const { owner, setOwner } = useContext(AppContext);

  const dashboardicon = (
    <svg
      className="w-6 h-6"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z"
      />
    </svg>
  );

  const sidebarLinks = [
    { name: "Dashboard", path: "/owner", icon: dashboardicon },
    { name: "Rooms", path: "/owner/rooms", icon: <Warehouse /> },
    { name: "Bookings", path: "/owner/bookings", icon: <CalendarArrowDown /> },
    { name: "Register Hotel", path: "/owner/register-hotel", icon: "🏨" },
  ];

  const logout = async () => {
    setOwner(false);
    toast.success("Logout successfully");
  };

  return (
    <>
      {/* topbar */}
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white shadow-sm">
        <Link to={"/owner"}>
          <img className="h-9" src={assets.logo} alt="logo" />
        </Link>
        <div className="flex items-center gap-5 text-gray-600">
          <p>Hi! Owner</p>
          <button
            onClick={logout}
            className="border rounded-full text-sm px-4 py-1 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </div>

      {/* layout */}
      <div className="flex min-h-screen bg-gray-50">
        {/* sidebar */}
        <div className="md:w-64 w-20 border-r border-gray-300 bg-white flex flex-col py-4">
          {sidebarLinks.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200"
            >
              {item.icon}
              <p className="hidden md:block">{item.name}</p>
            </Link>
          ))}
        </div>

        {/* main content area */}
        <div className="flex-1 p-6 overflow-y-auto bg-white">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default OwnerLayout;

