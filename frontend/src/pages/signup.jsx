import React, { useState, useContext } from "react";
import logo from "../Assets/logo.png";
import DentistImage from "../Assets/DentistImage.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../auth/AuthContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

const navigation = [
  { name: "About us", href: "/about_us" },
  { name: "Services", href: "/services" },
  { name: "Reviews", href: "/review" },
  { name: "Financial Records", href: "financial_record" },
];

export default function SignUp() {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const role = "user";

  const { user, login, logout } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    if (firstName === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "First Name is required",
      }));
    }

    if (lastName === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "Last Name is required",
      }));
    }

    if (phone === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone is required",
      }));
    }

    if (email === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
    }

    if (password.length < 8 || password.length > 32) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be between 8 and 32 characters",
      }));
    }

    if (password !== confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match",
      }));
    }

    if (!Object.keys(errors).length === 0) {
      return;
    }

    // If there are no errors, make the API call

    axios
      .post("http://localhost:8000/api/register", {
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        email: email,
        password: password,
        role: role,
      })
      .then((response) => {
        // Registration successful
        console.log("Registration successful:", response.data);
        // Store user information in state or context
        login(response.data.user);
        // Navigate to appointment or any other route
        navigate("/appointment");
      })
      .catch((err) => {
        // Handle error response here
        if (err.response && err.response.data && err.response.data.message) {
          // If the error response contains a message, set it as the error
          setErrors(err.response.data.message);
        } else {
          // Otherwise, set a generic error message
          setErrors("An error occurred. Please try again later.");
        }
        console.error("Registration failed:", err);
      });
  };

  return (
    <>
      <div>
        <div className="bg-">
          <header className="absolute inset-x-0 top-0 z-50">
            <nav
              className="flex items-center justify-between p-6 lg:px-8"
              aria-label="Global"
            >
              <div
                className="flex lg:flex-1"
                onClick={() => navigate("/appointment")}
              >
                <a href="" className="-m-1.5 p-1.5">
                  <span className="sr-only">Tooth Castle</span>
                  <img className="h-8 w-auto" src={logo} alt="" />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a
                  href="/login"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Log In <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </nav>
            <Dialog
              as="div"
              className="lg:hidden"
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
            >
              <div className="fixed inset-0 z-50" />
              <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Dental Clinic</span>
                    <img className="h-8 w-auto" src={logo} alt="" />
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="py-6" onClick={() => navigate("/login")}>
                      <a
                        href="/login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log In
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </header>

          <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-20">
            <div className="relative bg-white px-6 pt-1 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
              <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                <div className="flex flex-col items-center justify-center text-center space-y-2"></div>

                <div className="flex min-h-full flex-1 flex-col justify-center bg- px-6 py-5 lg:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                      className="mx-auto h-10 w-auto"
                      src={logo}
                      alt="Dental Clinic"
                    />
                    <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Sign Up
                    </h2>
                  </div>

                  <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                      className="space-y-6"
                      action="#"
                      method="POST"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <label
                          htmlFor="firstName"
                          className="mb-2 block text-base font-medium text-[#07074D]"
                        >
                          First Name
                        </label>
                        <div className="mt-1">
                          <input
                            id="firstName"
                            name="firstName"
                            type="firstName"
                            autoComplete="firstName"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                        {errors.firstName && (
                          <p style={{ color: "red" }}>{errors.firstName}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="lastName"
                          className="mb-2 block text-base font-medium text-[#07074D]"
                        >
                          Last Name
                        </label>
                        <div className="mt-1">
                          <input
                            id="lastName"
                            name="lastName"
                            type="lastName"
                            autoComplete="lastName"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                        {errors.lastName && (
                          <p style={{ color: "red" }}>{errors.lastName}</p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-base font-medium text-[#07074D]"
                        >
                          Phone Number
                        </label>
                        <div className="mt-1">
                          <input
                            id="phone"
                            name="phone"
                            type="phone"
                            autoComplete="phone"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                        {errors.phone && (
                          <p style={{ color: "red" }}>{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-base font-medium text-[#07074D]"
                        >
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        {errors.email && (
                          <p style={{ color: "red" }}>{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="password"
                            className="mb-2 block text-base font-medium text-[#07074D]"
                          >
                            Create Password
                          </label>
                        </div>
                        <div className="mt-2">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        {errors.password && (
                          <p style={{ color: "red" }}>{errors.password}</p>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="password"
                            className="mb-2 block text-base font-medium text-[#07074D]"
                          >
                            Confirm Password
                          </label>
                        </div>
                        <div className="mt-2">
                          <input
                            id="confirm-password"
                            name="confirmPassword"
                            type="password"
                            autoComplete="confirmPassword"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                        {errors.confirmPassword && (
                          <p style={{ color: "red" }}>
                            {errors.confirmPassword}
                          </p>
                        )}
                        <div></div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                        >
                          Register
                        </button>
                      </div>
                    </form>

                    <p className="mt-5 text-center text-sm text-gray-500">
                      <a
                        href=""
                        className="mt-10 text-center text-sm text-gray-500 font-semibold leading-3 text-indigo-600 hover:text-indigo-500"
                      >
                        I am already member
                      </a>
                    </p>
                    <div
                      style={{
                        textAlign: "center",
                        marginTop: 10,
                        textDecorationColor: "rgb(79 70 229)",
                        color: "rgb(79 70 229)",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate("/login")}
                    >
                      LOGIN
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
