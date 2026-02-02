// import { useState, useContext, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets";
// import { AppContext } from "../context/AppContext";
// import toast from "react-hot-toast";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { user, setuser } = useContext(AppContext);
  

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Hotels", path: "/hotels" },
//     { name: "Rooms", path: "/rooms" },
//     { name: "About", path: "/about" },
//     { name: "Owner", path: "/owner" },
    
  

//   ];
  

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

  

//   const logout = () => {
//     setuser(false);
//     toast.success("Logout Successful");
//     navigate("/");
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
//       ${isScrolled ? "bg-white shadow-md" : "bg-[#FF6347]"}
//       px-4 md:px-16 lg:px-24 py-4`}
//     >
//       <div className="max-w-[1200px] mx-auto flex items-center justify-between">
//         {/* LOGO */}
//         <Link to="/" className="flex items-center">
//           <img src={assets.logo} alt="logo" className="h-9" />
//         </Link>

//         {/* NAV LINKS + LOGIN BUTTON TOGETHER */}
//         <div className="hidden md:flex items-center gap-8">
//           {/* Nav Links */}
//           {navLinks.map((link, i) => (
//             <Link
//               key={i}
//               to={link.path}
//               className={`font-medium transition
//                 ${isScrolled ? "text-gray-700" : "text-white"}`}
//             >
//               {link.name}
//             </Link>
//           ))}

//           {/* Login Button */}
//         {user ? (
//   <div className="relative ml-6">
//     <img
//       src={assets.profile_icon}
//       className="w-10 h-10 rounded-full cursor-pointer"
//       alt="profile"
//       onClick={() => setIsMenuOpen((prev) => !prev)} // ✅ toggle menu on click
//     />
//     {isMenuOpen && ( // ✅ show dropdown only when open
//       <div
//         className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50"
//         onClick={(e) => e.stopPropagation()} // prevent outside click interference
//       >
//         <Link
//           to="/my-bookings"
//           className="block px-4 py-2 text-sm hover:bg-gray-100"
//         >
//           My Booking
//         </Link>
//         <button
//           onClick={logout}
//           className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//         >
//           Logout
//         </button>
//       </div>
//     )}
//   </div>
// ) : (
//   <button
//     onClick={() => navigate("/login")}
//     className={`ml-6 px-6 py-2 rounded-full font-medium transition ${
//       isScrolled ? "bg-black text-white" : "bg-white text-black"
//     }`}
//   >
//     Login
//   </button>
// )}


//         </div>

//         {/* MOBILE MENU ICON */}
//         <div className="md:hidden absolute right-4 top-5">
//           <svg
//             onClick={() => setIsMenuOpen(true)}
//             className={`w-6 h-6 cursor-pointer ${
//               isScrolled ? "text-black" : "text-white"
//             }`}
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <line x1="4" y1="6" x2="20" y2="6" />
//             <line x1="4" y1="12" x2="20" y2="12" />
//             <line x1="4" y1="18" x2="20" y2="18" />
//           </svg>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-6
//         transition-transform duration-300 md:hidden
//         ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <button
//           className="absolute top-4 right-4 text-xl"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           ✕
//         </button>

//         {navLinks.map((link, i) => (
//           <Link
//             key={i}
//             to={link.path}
//             onClick={() => setIsMenuOpen(false)}
//             className="text-lg font-medium"
//           >
//             {link.name}
//           </Link>
//         ))}

//         {user ? (
//           <>
//             <img
//               src={assets.profile_icon}
//               className="w-14 h-14 rounded-full"
//               alt="profile"
//             />
//             <Link to="/my-bookings" onClick={() => setIsMenuOpen(false)}>
//               My Booking
//             </Link>
//             <button onClick={logout} className="text-red-500">
//               Logout
//             </button>
//           </>
//         ) : (
//           <button
//             onClick={() => {
//               setIsMenuOpen(false);
//               navigate("/login");
//             }}
//             className="px-8 py-2 rounded-full bg-black text-white"
//           >
//             Login
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser, owner } = useContext(AppContext); // ✅ added owner here

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/hotels" },
    { name: "Rooms", path: "/rooms" },
    { name: "About", path: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = () => {
    setUser(null);
    toast.success("Logout Successful");
    navigate("/");
  };
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${isScrolled ? "bg-white shadow-md" : "bg-[#FF6347]"}
      px-4 md:px-16 lg:px-24 py-4`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src={assets.logo} alt="logo" className="h-9" />
        </Link>

        {/* NAV LINKS + LOGIN BUTTON TOGETHER */}
        <div className="hidden md:flex items-center gap-8">
          {/* Nav Links */}
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={`font-medium transition ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* ✅ Show Dashboard link only for owners */}
          {owner && (
            <Link
              to="/owner"
              className={`font-medium transition ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Dashboard
            </Link>
          )}

          {/* Login/Profile Button */}
          {user ? (
            <div className="relative ml-6">
              <img
                src={assets.profile_icon}
                className="w-10 h-10 rounded-full cursor-pointer"
                alt="profile"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              />
              {isMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link
                    to="/my-bookings"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    My Booking
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className={`ml-6 px-6 py-2 rounded-full font-medium transition ${
                isScrolled ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              Login
            </button>
          )}
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden absolute right-4 top-5">
          <svg
            onClick={() => setIsMenuOpen(true)}
            className={`w-6 h-6 cursor-pointer ${
              isScrolled ? "text-black" : "text-white"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-6
        transition-transform duration-300 md:hidden
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>

        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium"
          >
            {link.name}
          </Link>
        ))}

        {/* ✅ Show Dashboard link only for owners */}
        {owner && (
          <Link
            to="/owner"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium"
          >
            Dashboard
          </Link>
        )}

        {user ? (
          <>
            <img
              src={assets.profile_icon}
              className="w-14 h-14 rounded-full"
              alt="profile"
            />
            <Link to="/my-bookings" onClick={() => setIsMenuOpen(false)}>
              My Booking
            </Link>
            <button onClick={logout} className="text-red-500">
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/login");
            }}
            className="px-8 py-2 rounded-full bg-black text-white"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
