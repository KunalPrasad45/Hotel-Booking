import React, { useContext } from "react";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Login = () => {
  const {setuser,Navigate, setowner} = useContext(AppContext)
  const [state, setState] = React.useState("login");

  const [formData, setFormData] = React.useState({
    // name: '',
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Login Successful")
    setuser(true);
    Navigate("/");
    setowner(true);
    Navigate("/owner");
    console.log("formData", formData);
  };

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sm:w-[350px] w-full mx-auto mt-15  text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
    >
      <h1 className="text-heading text-3xl mt-10 font-medium">Login</h1>
      <p className="text-paragraph text-sm mt-2">Please Login in to continue</p>
      {state !== "login" && (
        <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2"></div>
      )}
      <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
        <Mail className="w-4 h-4" />
        <input
          type="email"
          name="email"
          placeholder="Email id"
          className="border-none outline-none ring-0 bg-transparent text-gray-500 text-sm w-full h-full"
          value={formData.email}
          onChange={onChangeHandler}
          required
        />
      </div>
      <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
        <Lock className="w-4 h-4" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-none outline-none ring-0 bg-transparent text-gray-500 text-sm w-full h-full"
          value={formData.password}
          onChange={onChangeHandler}
          required
        />
      </div>
      <button
        type="submit"
        className="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
      >
        Login
      </button>
      <p className="text-gray-500 text-sm mt-3 mb-11">
        Dont have an account?"{" "}
        <Link to={"/signup"} className="text-indigo-500 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default Login;



// import React, { useContext, useState } from "react";
// import { Mail, Lock } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import toast from "react-hot-toast";

// const Login = () => {
//   const { setuser } = useContext(AppContext);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setuser(true);
//     toast.success("Login Successful");
//     navigate("/");
//     console.log("formData", formData);
//   };

//   const onChangeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
//       <form className="w-full max-w-[380px] text-center border border-gray-300/60 rounded-2xl px-8 py-10 bg-white">
//         <h1 className="text-3xl font-medium">Login</h1>
//         <p className="text-sm text-gray-500 mt-2">
//           Please login to continue
//         </p>

//         <div className="flex items-center w-full mt-6 border h-12 rounded-full pl-6 gap-2">
//           <Mail className="w-4 h-4" />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email id"
//             className="w-full outline-none text-sm"
//             value={formData.email}
//             onChange={onChangeHandler}
//             required
//           />
//         </div>

//         <div className="flex items-center w-full mt-4 border h-12 rounded-full pl-6 gap-2">
//           <Lock className="w-4 h-4" />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="w-full outline-none text-sm"
//             value={formData.password}
//             onChange={onChangeHandler}
//             required
//           />
//         </div>

//         <button className="mt-6 w-full h-11 rounded-full bg-indigo-500 text-white">
//           Login
//         </button>

//         <p className="text-sm text-gray-500 mt-4">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-indigo-500">
//             Sign up
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;
