


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AddRoom = () => {
  const navigate = useNavigate();

  const [roomData, setRoomData] = useState({
    hotelName: "",
    hotelAddress: "",
    rating: "",
    price: "",
    amenities: "",
    image: [],
    isAvailable: true,
  });

  // Handle input change
  const handleChange = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const updatedImages = [...roomData.image, file];
      setRoomData({ ...roomData, image: updatedImages });
    }
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(roomData);
    toast.success("Room registered successfully!");
    navigate("/owner/rooms");
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg md:p-10 p-6 space-y-6 w-full max-w-lg"
      >
        {/* === Room Image === */}
        <div>
          <p className="text-base font-medium mb-2">Room Image</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border border-gray-400 p-2 rounded w-full"
          />
        </div>

        {/* === Room Type === */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Room Type</label>
          <input
            type="text"
            name="hotelName"
            value={roomData.hotelName}
            onChange={handleChange}
            placeholder="Enter room name"
            className="outline-none py-2.5 px-3 rounded border border-gray-400 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* === Description === */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Room Description</label>
          <textarea
            rows={3}
            name="hotelAddress"
            value={roomData.hotelAddress}
            onChange={handleChange}
            placeholder="Enter address or details"
            className="outline-none py-2.5 px-3 rounded border border-gray-400 resize-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* === Price === */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Price per Night</label>
          <input
            type="number"
            name="price"
            value={roomData.price}
            onChange={handleChange}
            placeholder="0"
            className="outline-none py-2.5 px-3 rounded border border-gray-400 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* === Amenities === */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Room Amenities</label>
          <textarea
            rows={3}
            name="amenities"
            value={roomData.amenities}
            onChange={handleChange}
            placeholder="E.g. WiFi, Pool, Gym"
            className="outline-none py-2.5 px-3 rounded border border-gray-400 resize-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* === Availability === */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Available?</label>
          <select
            name="isAvailable"
            value={roomData.isAvailable}
            onChange={handleChange}
            className="outline-none py-2.5 px-3 rounded border border-gray-400 focus:ring-2 focus:ring-blue-400"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>

        {/* === Submit Button === */}
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded"
        >
          Register Room
        </button>
      </form>
    </div>
  );
};

export default AddRoom;
