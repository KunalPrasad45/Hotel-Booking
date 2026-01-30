import { motion } from "motion/react";
 import { useContext } from "react";
 import { AppContext } from "../context/AppContext";
const RoomCard = ({ room }) => {
  const { Navigate } = useContext(AppContext);
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <div className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out  max-w-80 bg-white px-3 md:px-5">
        <img
          src={room.images[0]}
          alt="City skyline"
          className="w-full h-52 object-cover"
        />
        <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800">
          {room.roomType}
        </h3>

        <div className="flex items-center gap-4 justify-between">
          <p className="text-sm px-4  text-gray-600">
            ${room.pricePerNight}/per night
          </p>
          <button
            onClick={() => {
              Navigate(`/room/${room._id}`);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-blue-700 text-white py-1 px-4 rounded-md mb-3 cursor-pointer"
          >
            See Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};
export default RoomCard;
