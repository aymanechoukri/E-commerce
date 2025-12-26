import { motion as M } from "framer-motion";
import HeaderPages from "../../Components/Website/HeaderPages";
import { useState } from "react";
import axios from "axios";
import { baseURL, LOGNUP } from "../../Components/api/Api";
import { useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import Loading from "../../Components/loading/Loading";
import Cookies from "universal-cookie";

export default function Lognup() {
  const [forms, setForms] = useState({
    email: "",
    password: "",
  });
  const [accept, setAccept] = useState(false);
  const [valid, setValid] = useState(null);
  const [loading, setLoading] = useState(false);
  const people = new Cookies();
  const GO = useNavigate();

  function handleChange(e) {
    setForms({ ...forms, [e.target.name]: e.target.value });
  }

  async function toggelSubmit(e) {
    e.preventDefault();
    setAccept(true);
    setLoading(true);

    if (forms.email === "" || forms.password.length < 8) return;

    try {
      const res = await axios.post(`${baseURL}/${LOGNUP}`, forms);
      setLoading(false);
      const tokens = res.data.token;
      people.set("peoples", tokens);

      if (res.status === 200 || res.status === 201) {
        GO("/users");
      }
    } catch (error) {
      setValid(error.response && error.response.status);
      setLoading(false);
    }
  }

  return (
    <>
      {loading && <Loading />}
      <div className="min-h-screen flex flex-col bg-gray-50">
        <HeaderPages />
        <div className="flex justify-center items-center p-4">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center p-4">
            {/* SVG Image */}
            <div className="flex-1 mb-4 md:mb-0">
              <M.img
                src="/Assistes/forms.png"
                alt="Log In"
                className="w-2/3 h-auto mx-auto"
                initial={{ opacity: 0, scale: 0.5, x: -30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              />
            </div>

            {/* Log In Form */}
            <M.div
              initial={{ opacity: 0, scale: 0.5, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h2 className="text-2xl font-serif font-bold text-center mb-4 text-green-500">
                Log in
              </h2>
              {valid === 401 && accept && (
                <p className="text-red-400 text-start font-medium text-sm mb-1">
                  Invalid credentials.
                </p>
              )}
              <form onSubmit={toggelSubmit} className="space-y-5">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={forms.email}
                    onChange={handleChange}
                    placeholder="John...@domain.com"
                    className="font-bold px-2 text-gray-400 mt-1 block w-full  py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                  />
                  <FaEnvelope className="absolute right-3 top-11 transform -translate-y-1/2 text-gray-500" />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={forms.password}
                    onChange={handleChange}
                    placeholder="You must enter more than 8 characters."
                    className={
                      forms.password.length >= 8
                        ? "font-bold text-gray-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        : accept
                        ? "font-bold text-gray-400 mt-1 block w-full px-3 py-2 border-2 border-red-600 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                        : "font-bold text-gray-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    }
                  />
                  {forms.password.length < 8 && accept && (
                    <p className="text-red-400 text-start font-medium text-sm mt-1">
                      At least 8 characters?
                    </p>
                  )}
                </div>

                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    className="font-extrabold w-full py-2 px-4 bg-orange-500 text-white rounded-md shadow hover:bg-orange-600 focus:outline-none active:scale-95 duration-150 cursor-pointer"
                  >
                    Log In
                  </button>
                </div>
                <div className="flex justify-center">
                  <a
                    href="http://127.0.0.1:8000/login-google"
                    className="flex items-center gap-3 px-6 py-3 rounded-xl text-white font-semibold
               bg-linear-to-r from-blue-500 to-indigo-600
               hover:from-blue-600 hover:to-indigo-700
               transition-all duration-200 active:scale-95"
                  >
                    <i className="fa-brands fa-google text-white text-lg"></i>
                    Log in with Google
                  </a>
                </div>
              </form>
            </M.div>
          </div>
        </div>
      </div>
    </>
  );
}
