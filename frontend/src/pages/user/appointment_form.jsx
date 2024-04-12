import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import Appointment from "./appointment";

const navigation = [
  { name: "About us", href: "/about_us" },
  { name: "Services", href: "/services" },
  { name: "Reviews", href: "/reviews" },
  { name: "Financial Records", href: "financial-records" },
];

export default function Appointment_Form() {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleSubmit = () => {navigate("/")};
  return (
    // header
    <>
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

        {/* form */}

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
              Make an Appointment
            </h2>

            <p>
              We’re always welcoming new patients and look forward to meeting
              you!
            </p>
            <div className="mt-7 sm:w-full sm:max-w-[650px]">
              <form className="space-y-6">
                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="fName"
                        class="mb-2 block text-base font-medium text-gray-900"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        autoComplete="fname"
                        required
                        placeholder="First Name*"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="lName"
                        class="mb-2 block text-base font-medium text-[#07074D]"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lName"
                        id="lName"
                        autoComplete="lname"
                        required
                        placeholder="Last Name*"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-50  ">
                      <label
                        for="age"
                        class="mb-2 block text-base font-medium text-gray-900"
                      >
                        Age
                      </label>
                      <input
                        type="text"
                        name="age"
                        id="age"
                        autoComplete="age"
                        required
                        placeholder="Age* (Must be over 18)"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="lName"
                        class="mb-2 block text-base font-medium text-[#07074D]"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phonenumber"
                        id="phonenumber"
                        autoComplete="phonenumber"
                        required
                        placeholder="Phone Number*"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="address"
                        class="mb-2 block text-base font-medium text-gray-900"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="address"
                        required
                        placeholder="Address*"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="email"
                        class="mb-2 block text-base font-medium text-[#07074D]"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="email"
                        required
                        placeholder="Email*"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      <p>
                        <br /> **Notifications & alerts for appointments sent to
                        this number.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="date"
                        class="mb-2 block text-base font-medium text-[#07074D]"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="address"
                        class="mb-2 block text-base font-medium text-gray-900"
                      >
                        Problem
                      </label>
                      <input
                        type="text"
                        name="problem"
                        id="problem"
                        autoComplete="problem"
                        required
                        placeholder="Share your problem*"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-20 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
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
