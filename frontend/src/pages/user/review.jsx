import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../../auth/AuthContext";
import axios from "axios";
import Header from "../../Components/Header";
import StarRating from "../../Components/StarRating/StarRating";
import { ToastContainer, toast } from "react-toastify";

// import Appointment from "./appointment";

const navigation = [
  { name: "About us", href: "/about_us" },
  { name: "Services", href: "/services" },
  { name: "Reviews", href: "/review" },
  { name: "Financial Records", href: "financial_record" },
];

export default function Review() {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const handleSubmit = () => {
  //   navigate("/");
  // };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState({});

  //const errors = {}; // Initialize an empty object to store errors

  const { user, login, logout } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    if (review === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        review: "Review is required",
      }));

      // if (Object.keys(errors).length === 0) {
      //   return;
      // }
    }
    axios
      .post("http://localhost:8000/api/review", {
        first_name: user.first_name,
        last_name: user.last_name,
        age: user.age,
        phone: user.phone,
        address: user.address,
        review: review,
        rating: 5,
      })
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error(err.data.message);
      });
  };

  return (
    // header
    <>
      <div className="bg-">
        <Header />
        {/* <StarRating /> */}
        {/* form */}
      </div>

      <div className="relative bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className=" py-5 sm:py-18 lg:py-18">
            <h2 className="mt- mb-7 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Write a Review
            </h2>

            <p>
              We’re always welcoming new patients and look forward to meeting
              you!
            </p>
            <div className="mt-7 sm:w-full sm:max-w-[650px]">
              <form className="space-y-6">
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        for="address"
                        className="mb-2 block text-base font-medium text-gray-900"
                      >
                        Review
                      </label>
                      <input
                        type="text"
                        name="review"
                        id="review"
                        autoComplete="review"
                        placeholder="Review- Write your review*"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-20 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        onChange={(e) => setReview(e.target.value)}
                      />
                    </div>
                    {errors.review && (
                      <p style={{ color: "red" }}>{errors.review}</p>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => navigate("/appointment")}
                    type="Cancel"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
