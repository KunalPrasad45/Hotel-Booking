
import React, { useState, useContext } from "react";
import { Mail, Lock, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Signup = () => {
  const { setuser, setowner } = useContext(AppContext); // ✅ Context use
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);

    // ✅ Set user logged in
    setuser(true);
    toast.success("Signup Successful");

    // ✅ Redirect to homepage after signup
    navigate("/");
    // ✅ Set user logged in
    setowner(true);


    // ✅ Redirect to owner after signup
    navigate("/owner");
  };

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[380px] text-center border border-gray-300/60 rounded-2xl px-8 py-10 bg-white"
      >
        <h1 className="text-3xl font-medium">Signup</h1>
        <p className="text-sm text-gray-500 mt-2">
          Please sign up to continue
        </p>

        <div className="flex items-center w-full mt-6 border h-12 rounded-full pl-6 gap-2">
          <User className="w-4 h-4" />
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full outline-none text-sm"
            value={formData.name}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="flex items-center w-full mt-4 border h-12 rounded-full pl-6 gap-2">
          <Mail className="w-4 h-4" />
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="w-full outline-none text-sm"
            value={formData.email}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="flex items-center w-full mt-4 border h-12 rounded-full pl-6 gap-2">
          <Lock className="w-4 h-4" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full outline-none text-sm"
            value={formData.password}
            onChange={onChangeHandler}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full h-11 rounded-full bg-indigo-500 text-white hover:opacity-90 transition-opacity"
        >
          Signup
        </button>

        <p className="text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
