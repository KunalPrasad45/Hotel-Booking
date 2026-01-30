import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
const Hotels = () => {
  const { hotelData } = useContext(AppContext);
  return (
    
    <div className="pt-5 pb-12 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-semibold text-blue-600 mt-auto px-2 text-center">
        All Hotels
      </h1>
      <div className="flex flex-wrap items-center justify-center mt-12 gap-4 max-w-5xl mx-auto">
        {hotelData.map((item, index) => (
          <motion.div
          
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            animate={{ y: [0, -30, 0] }}
            key={index}
            className="relative group rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={item.image}
              alt="image"
              className="size-56 object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-lg font-medium">{item.name}</h1>
              <p className="text-sm">{item.address}</p>

              <h1 className="text-lg font-medium">{item.price}/night</h1>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Hotels;
