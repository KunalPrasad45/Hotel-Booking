import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import RoomCard from "../components/RoomCard";

const Rooms = () => {
  const { roomData } = useContext(AppContext);
  return (
    <div className="pt-2 pb-12 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-semibold text-heading my-8 px-2 text-center ">
        All Rooms
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto mt-12">
        {roomData.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};
export default Rooms;
