
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-hot-toast";

const RegisterHotel = () => {
  const { Navigate } = useContext(AppContext);

  const [data, setData] = useState({
    hotelName: "",
    hotelAddress: "",
    rating: "",
    price: "",
    amenities: "",
    image: null,
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setData({ ...data, image: selectedFile });
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl);
    }
  };

  // ✅ Delete image
  const handleDeleteImage = () => {
    setFile(null);
    setPreview(null);
    setData({ ...data, image: null });
    toast.success("Image removed!");
  };

  // ✅ Submit handler (only logs data for now)
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      ...data,
      amenities: data.amenities.split(",").map((a) => a.trim()),
    };

    console.log("Hotel Data Submitted:", formData);

    toast.success("Hotel Registered Successfully!");
    Navigate("/owner/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg md:p-10 p-6 space-y-6 w-full max-w-lg"
      >
        {/* === Hotel Image Section === */}
        <div>
          <p className="text-base font-medium mb-2">Hotel Image</p>

          {preview ? (
            <div className="flex flex-col items-center gap-3">
              <img
                src={preview}
                alt="Hotel Preview"
                className="w-40 h-32 object-cover rounded-xl shadow-md border"
              />

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleDeleteImage}
                  className="px-4 py-1 bg-red-500 text-white text-sm rounded-full hover:bg-red-600 transition"
                >
                  Delete
                </button>
                <label className="cursor-pointer px-4 py-1 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition">
                  Replace
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center border border-dashed border-gray-400 p-6 rounded-xl bg-gray-50">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100 cursor-pointer"
              />
              <p className="text-sm text-gray-500 mt-2">Upload a hotel image</p>
            </div>
          )}
        </div>

        {/* === Hotel Name === */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Hotel Name</label>
          <input
            type="text"
            name="hotelName"
            value={data.hotelName}
            onChange={handleChange}
            placeholder="Enter hotel name"
            className="outline-none py-2.5 px-3 rounded border border-gray-400 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* === Hotel Address === */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Hotel Address</label>
          <textarea
            rows={3}
            name="hotelAddress"
            value={data.hotelAddress}
            onChange={handleChange}
            placeholder="Enter address"
            className="outline-none py-2.5 px-3 rounded border border-gray-400 resize-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* === Rating === */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Rating</label>
          <input
            type="number"
            name="rating"
            value={data.rating}
            onChange={handleChange}
            placeholder="0-5"
            min="0"
            max="5"
            className="outline-none py-2.5 px-3 rounded border border-gray-400 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* === Price === */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Price per Night</label>
          <input
            type="number"
            name="price"
            value={data.price}
            onChange={handleChange}
            placeholder="0"
            className="outline-none py-2.5 px-3 rounded border border-gray-400 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* === Amenities === */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Amenities</label>
          <textarea
            rows={3}
            name="amenities"
            value={data.amenities}
            onChange={handleChange}
            placeholder="E.g. WiFi, Pool, Gym"
            className="outline-none py-2.5 px-3 rounded border border-gray-400 resize-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* === Submit Button === */}
        <button
          type="submit"
          className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded transition"
        >
          Register Hotel
        </button>
      </form>
    </div>
  );
};

export default RegisterHotel;
