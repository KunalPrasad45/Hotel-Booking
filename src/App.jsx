
// import React, { useContext } from 'react'
// import { Routes, Route, useLocation} from "react-router-dom"
// import Home from "./pages/Home";
// import Hotels from "./pages/Hotels";
// import Rooms from "./pages/Rooms";
// import SingleRoom from "./pages/SingleRoom"
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import About from "./pages/About"
// import MyBookings from "./pages/MyBookings";
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import AllHotels from "./pages/owner/AllHotels";
// import RegisterHotel from "./pages/owner/RegisterHotel";
// import AllRooms from "./pages/owner/AllRooms";
// import AddRoom from "./pages/owner/AddRoom";
// import OwnerLayout from "./pages/owner/OwnerLayout";
// import Bookings from "./pages/owner/Bookings";
// import { Toaster } from 'react-hot-toast';
// import { AppContext } from './context/AppContext';


// const App = () => {
//   const ownerPath = useLocation().pathname.includes("owner");
//   const {owner} = useContext(AppContext)

//   return (
   
//     <div className='mt-20'>
//       <Toaster/>
//         {!ownerPath && <Navbar/>} 
        
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/hotels' element={<Hotels/>}/>
//         <Route path='/rooms' element={<Rooms/>}/>
//         <Route path='/rooms' element={<Rooms/>}/>
//         <Route path='/room/:id' element={<SingleRoom/>}/>
//         <Route path='/signup' element={<Signup/>}/>
//         <Route path='/login' element={<Login/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/my-bookings' element={<MyBookings/>}/>
//         {/* owner routes  */}
//         <Route path="/owner" element={owner ? <OwnerLayout /> : <Login />}>
//           <Route index element={<AllHotels />} />
//           <Route
//             path="register-hotel"
//             element={owner ? <RegisterHotel /> : <Login />}
//           />
//           <Route path="rooms" element={owner ? <AllRooms /> : <Login />} />
//           <Route path="add-room" element={owner ? <AddRoom /> : <Login />} />
//           <Route path="bookings" element={owner ? <Bookings /> : <Login />} />
//         </Route>
//       </Routes>
      
//       {!ownerPath && <Footer/>} 
      
//     </div>
//   )
// }

// export default App


import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import MyBookings from "./pages/MyBookings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllHotels from "./pages/owner/AllHotels";
import RegisterHotel from "./pages/owner/RegisterHotel";
import AllRooms from "./pages/owner/AllRooms";
import AddRoom from "./pages/owner/AddRoom";
import OwnerLayout from "./pages/owner/OwnerLayout";
import Bookings from "./pages/owner/Bookings";
import { Toaster } from "react-hot-toast";
import { AppContext } from "./context/AppContext";

const App = () => {
  const location = useLocation();
  const { owner, user } = useContext(AppContext);

  const path = location.pathname;

  // ✅ Hide Navbar/Footer only when inside /owner dashboard pages
  const hideNavbarFooter =
    path.startsWith("/owner/");

  return (
    <div className="mt-20">
      <Toaster />

      {/* ✅ Navbar visible on all non-owner routes including login/signup */}
      {!hideNavbarFooter && <Navbar />}

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room/:id" element={<SingleRoom />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />

        {/* User routes */}
        <Route
          path="/my-bookings"
          element={user ? <MyBookings /> : <Login />}
        />

        {/* Owner routes */}
        <Route
          path="/owner"
          element={owner ? <OwnerLayout /> : <Login />}
        >
          <Route index element={<AllHotels />} />
          <Route path="register-hotel" element={<RegisterHotel />} />
          <Route path="rooms" element={<AllRooms />} />
          <Route path="add-room" element={<AddRoom />} />
          <Route path="bookings" element={<Bookings />} />
        </Route>
      </Routes>

      {/* ✅ Footer follows same condition */}
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

export default App;
