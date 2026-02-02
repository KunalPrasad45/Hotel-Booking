// import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { hotelsData, roomsData } from "../assets/assets.js";
// export const AppContext = createContext();
// const AppContextProvider = ({children})=>{
//     const Navigate = useNavigate();
//     const [user, setuser] = useState(null)
//     const [owner, setowner] = useState(null)
//     const [hotelData, setHotelData] = useState([])
//      const [roomData, setRoomData] = useState([])
//     const fetchHotelsData = ()=> {
//         setHotelData(hotelsData);
//     };
//     const fetchRoomsData = ()=> {
//         setRoomData(roomsData);
//     };
//     useEffect(() => {
//         fetchHotelsData();
//         fetchRoomsData();
         
      
//     }, []);
//     const value = { Navigate,user,setuser,owner,setowner,hotelData, roomData }
//           return <AppContext.Provider value={value}>{children}</AppContext.Provider>
          
    
    
    
   


// };
// export default AppContextProvider;


import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { hotelsData, roomsData } from "../assets/assets.js";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const Navigate = useNavigate();

  const [user, setUser] = useState(null);   // 👈 for normal users
  const [owner, setOwner] = useState(null); // 👈 for hotel owners
  const [hotelData, setHotelData] = useState([]);
  const [roomData, setRoomData] = useState([]);

  const fetchHotelsData = () => setHotelData(hotelsData);
  const fetchRoomsData = () => setRoomData(roomsData);

  useEffect(() => {
    fetchHotelsData();
    fetchRoomsData();
  }, []);

  const logoutAll = () => {
    setUser(null);
    setOwner(null);
  };

  const value = {
    Navigate,
    user,
    setUser,
    owner,
    setOwner,
    hotelData,
    roomData,
    logoutAll,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
