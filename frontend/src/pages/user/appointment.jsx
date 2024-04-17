import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import image from "../../Assets/appointment.png";
import services1 from "../../Assets/services1.png";
import services2 from "../../Assets/services2.png";
import services3 from "../../Assets/services3.png";
import services4 from "../../Assets/services4.png";
import { useAuth } from "../../auth/AuthContext";
import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const navigation = [
  { name: "About us", href: "/about_us" },
  { name: "Services", href: "/services" },
  { name: "Reviews", href: "/review" },
  { name: "Financial Records", href: "financial_record" },
];

export default function Appointment() {
  const navigate = useNavigate();

  const { user, login, logout } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
          {user ? (
            // user.first_name
            <div>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user.first_name}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a onClick={logout} className="dropdown-item" href="">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="/login"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Log In <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          )}
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
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

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
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              ITS A BEAUTIFUL DAY TO SAVE TEETH
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/appointment_form"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>

        <div></div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      {/* introduction part */}
      <div className="h-screen bg-gray-50 flex items-center p-5">
        <section className="bg-cover bg-center py-10 w-full">
          <div className="container mx-auto text-left text-black">
            <div className="flex items-center">
              <div className="w-1/2">
                <h1 className="text-5xl font-medium mb-6 mt-10">
                  Introduction
                </h1>
                <p className="text-xl mb-12">
                  Nestled within our bustling city, Tooth Castle stands as a
                  beacon of dental excellence and care. Founded with passion by
                  Dr. Preety Neupane, our clinic transcends mere dentistry—it's
                  a fortress where smiles are nurtured and confidence is
                  restored. With a dedicated team selected for their unwavering
                  commitment to our vision, we blend empathy and expertise to
                  create personalized journeys towards optimal oral health.
                  Beyond treatments, we empower individuals to embrace their
                  smiles with confidence, fostering lasting partnerships for
                  wellness. Committed to community, we extend our reach through
                  education and outreach, making a tangible difference in every
                  life we touch. As the saga of Tooth Castle unfolds, guided by
                  Dr. Neupane's steadfast dedication, we invite you to join us
                  in building a kingdom of care and confidence, one smile at a
                  time. Welcome to Tooth Castle, where every smile is a
                  cherished jewel in our crown of compassion and commitment.
                </p>
              </div>
              <div className="flex flex-col w-1/2 pl-16">
                <img
                  src={image}
                  className="h-92 w-full object-cover rounded-xl"
                  alt="Layout Image"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Services part */}

      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col jusitfy-center items-center space-y-10">
            <div className="flex flex-col justify-center items-center ">
              <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">
                Our Sevices
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
              <div className="relative group flex justify-center items-center h-full w-full">
                <img
                  className="object-center object-cover h-full w-full"
                  src={services1}
                  alt="services-image"
                />
                <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Dental Braces
                </button>

                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>

              <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={services2}
                    alt="services-image"
                  />
                  <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Tooth Extraction
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={services3}
                    alt="services-image"
                  />
                  <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Cement Teeth
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
              </div>

              <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                <img
                  className="object-center object-cover h-full w-full"
                  src={services4}
                  alt="services-image"
                />
                <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Teeth Whitening
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
              <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                <img
                  className="object-center object-cover h-full w-full hidden md:block"
                  src={services4}
                  alt="servives-image"
                />
                <img
                  className="object-center object-cover h-full w-full md:hidden"
                  src={services4}
                  alt="servives-image"
                />
                <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Teeth Whitening
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
            </div>
            <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
              <img
                className="object-center object-cover h-full w-full hidden md:block"
                src={services4}
                alt="services-image"
              />
              <img
                className="object-center object-cover h-full w-full sm:hidden"
                src={services4}
                alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
              />
              <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                Teeth Whitening
              </button>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/services"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Testimonials part */}
      <div className="">
        <div className="flex flex-col items-center p-8 space-y-8 bg-gray-100">
          <h1 className="text-3xl font-bold text-center">Testimonials</h1>
          <h2 className="text-xl font-bold text-center">
            Hear what our clients say
          </h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <img
                className="w-16 h-16 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
              <div>
                <p className="text-xl font-bold">Andrew Jones</p>
                <p className="text-gray-600">Product Developer at Webflow</p>
              </div>
            </div>
            <p className="text-xl">
              Im absolutely in love with @gather_place. It's the first video
              calling software built for people who meet to get work done.
              Feeling whole lot productive.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <img
                className="w-16 h-16 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
              <div>
                <p className="text-xl font-bold">Mike Warken</p>
                <p className="text-gray-600">Manager at Zapier</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-60 bg-gray-50 items-center mt-10 p-8">
          <h1 className="text-3xl font-bold text-center">Our Social Media</h1>
          <div className="flex justify-around items-center space-x-4 mt-20">
            <a
              href="https://www.facebook.com/"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaFacebookF size={100} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaTwitter size={100} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaLinkedinIn size={100} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaInstagram size={100} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center p-5 space-y-8 bg-gray-100 mt-10">
          <h1 className="text-3xl font-bold text-center">Maps/Location</h1>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6684938709354!2d85.29402880251465!3d27.69663908236199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb185dafda8479%3A0xc61279d1bda4fd20!2sRavi%20Bhavan%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1711854615638!5m2!1sen!2snp"
            width="900"
            height="450"
            style={{ border: "10%", padding: "10px", justifyItems: "center" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="vhg"
          ></iframe>
        </div>
        {/* Footer */}
        <div>
          <footer className="relative bg-blueGray-200 pt-8 pb-6">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap text-left lg:text-left">
                <div className="w-full lg:w-6/12 px-4">
                  <h4 className="text-3xl fonat-semibold text-blueGray-700">
                    Let's keep in touch!
                  </h4>
                  <h3 className="text-3xl fonat-semibold text-blueGray-700">
                    Contact Us!
                  </h3>
                  <br />
                  <h5 className="text-lg mt-0 mb-2 text-blueGray-600">Call</h5>
                  <p> 9847691402 </p>
                  <p> 014492598</p>
                  <br />
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="flex flex-wrap items-top mb-6">
                    <div className="w-full lg:w-4/12 px-4 ml-auto">
                      <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                        Useful Links
                      </span>
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="/about_us"
                          >
                            About Us
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="/services"
                          >
                            Services
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="/review"
                          >
                            Reviews
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="/finance_record"
                          >
                            Finance Records
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                        Useful Services
                      </span>
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                          >
                            MIT License
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://creative-tim.com/terms?ref=njs-profile"
                          >
                            Terms &amp; Conditions
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://creative-tim.com/privacy?ref=njs-profile"
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                            href="https://creative-tim.com/contact-us?ref=njs-profile"
                          >
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-6 border-blueGray-300" />
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Copyright © <span id="get-current-year">2021</span>
                    <a
                      href="https://www.creative-tim.com/product/notus-js"
                      className="text-blueGray-500 hover:text-gray-800"
                      target="_blank"
                    />{" "}
                    ToothCastle by
                    <a
                      href="https://www.creative-tim.com?ref=njs-profile"
                      className="text-blueGray-500 hover:text-blueGray-800"
                    >
                      Ichhya Koirala
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
