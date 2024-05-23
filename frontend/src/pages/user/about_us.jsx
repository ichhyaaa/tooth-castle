import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import doctor1 from "../../Assets/doctor1.png";
import doctor2 from "../../Assets/doctor2.png";
import doctor3 from "../../Assets/doctor3.png";
import doctor4 from "../../Assets/doctor4.png";
import doctor5 from "../../Assets/doctor5.png";
import doctor6 from "../../Assets/doctor6.png";
import doctor7 from "../../Assets/doctor7.png";
import Header from "../../Components/Header";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

// const [showMore, setShowMore] = useState(false);

const navigation = [
  { name: "About us", href: "/about_us" },
  { name: "Services", href: "/services" },
  { name: "Reviews", href: "/review" },
  { name: "Financial Records", href: "financial_record" },
];

export default function About_us() {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-">
      <Header />

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
              GET TO KNOW OUR TOOTH CASTLE TEAM
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
      <div className="h-screen bg-gray-50 flex items-center p-5">
        <section className="bg-cover bg-center py-10 w-full">
          <div className="container mx-auto text-left text-black">
            <div className="flex items-center">
              <div className="w-1/2">
                <h1 className="text-5xl font-medium mb-6 mt-10">
                  Introduction
                </h1>
                <p className="text-xl mb-5">
                  Having my own practice has always been something I have longed
                  to do since I began practising as a dentist. After working in
                  Brighton for almost 10 years as an associate dentist, the time
                  came to make this dream a reality. After a long search, a
                  location was found that captured my imagination and ideas,
                  where I could see my vision come to life.{" "}
                </p>
                <p className="text-xl mb-5">
                  Offering a unique and relaxing atmosphere with
                  state-of-the-art equipment, we wished to provide a service
                  that went above and beyond the usual dental care experience
                  many people have become used to.
                </p>
                <p className="text-xl mb-5">
                  We aim to provide a service that we as dentists would want for
                  our own care. We wanted our treatments to be carried out to
                  perfection, to achieve exceptional results and to preserve
                  tooth tissue at every opportunity to extend their longevity.
                </p>
                <p className="text-xl mb-5">
                  We also wanted our patients to feel personal warmth and
                  comfort from the clinic as a whole and that they are being
                  given a personal experience they would value. We hope our
                  patients feel at home, cared for, pampered and looked after in
                  an environment they find relaxing.
                </p>
              </div>
              <div className="flex flex-col w-1/2 pl-16">
                <img
                  src={doctor1}
                  className="h-92 w-full object-cover rounded-xl"
                  alt="Layout Image"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* PART 1 */}
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="w-full items-center mx-auto max-w-screen-lg">
          <div className="group grid w-full grid-cols-2">
            <div>
              <div className="pr-12">
                <p className="peer mb-6 text-gray-400">
                  <h3 className="mb-4 font-semibold text-xl text-gray-400">
                    Dr.Priti Neupane
                  </h3>
                  I’m a dentist because it has always been my desire to help
                  people in a healthcare environment. Growing up in my dad’s and
                  uncle’s dental office, I learned early on that dentistry was
                  going to be my path. I love the relationships we build with
                  our patients and our ability to help them live healthier,
                  better lives.
                </p>
                <p className="mb-6 text-gray-400">
                  <h3 className="mb-4 font-semibold text-xl text-gray-400">
                    Education
                  </h3>
                  <li>
                    BA in Biology and World Religions, Westminster College
                  </li>
                  <li>DDS, University of Oklahoma</li>
                </p>
              </div>
            </div>
            <div className="pl-16 relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-blue-500 before:bottom-0 before:left-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
              <div className="rounded-xl overflow-hidden">
                <img src={doctor7} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PART 2 */}
      <div className="relative flex  flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="w-full items-center mx-auto max-w-screen-lg">
          <div className="group grid w-full grid-cols-2">
            <div className="pr-16 relative flex items-end flex-col before:block">
              <div className="rounded-xl overflow-hidden">
                <img src={doctor2} alt="" />
              </div>
            </div>
            <div className="pl-16 relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-blue-500 before:bottom-0 before:left-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
              <div>
                <div className="pr-18">
                  <p className="peer mb-6 text-gray-400">
                    <h3 className="mb-4 font-semibold text-xl text-gray-400">
                      Dr. Sarah Chang
                    </h3>
                    Dr. Sarah Chang is passionate about dentistry and is
                    dedicated to providing compassionate care to her patients.
                    With a warm and friendly demeanor, she strives to create a
                    comfortable and welcoming environment for everyone who walks
                    through her practice doors.
                  </p>
                  <p className="mb-6 text-gray-400">
                    <h3 className="mb-4 font-semibold text-xl text-gray-400">
                      Education
                    </h3>
                    <li>
                      Bachelor of Science in Biology, University of California,
                      Los Angeles
                    </li>
                    <li>
                      Doctor of Dental Surgery (DDS), University of Southern
                      California School of Dentistry
                    </li>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PART 3 */}
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="w-full items-center mx-auto max-w-screen-lg">
          <div className="group grid w-full grid-cols-2">
            <div>
              <div className="pr-12">
                <p className="peer mb-6 text-gray-400">
                  <h3 className="mb-4 font-semibold text-xl text-gray-400">
                    Dr. Michaela Pate
                  </h3>
                  Dr. Michaela Patel is a dedicated and experienced dentist who
                  is committed to providing top-notch dental care to her
                  patients. With a gentle touch and a genuine concern for their
                  well-being, she aims to make each dental visit a positive and
                  comfortable experience.
                </p>
                <p className="mb-6 text-gray-400">
                  <h3 className="mb-4 font-semibold text-xl text-gray-400">
                    Education
                  </h3>
                  <li>
                    Bachelor of Science in Neuroscience, University of Michigan
                  </li>
                  <li>
                    Doctor of Dental Medicine (DMD), University of Pennsylvania
                    School of Dental Medicine
                  </li>
                </p>
              </div>
            </div>
            <div className="pl-16 relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-blue-500 before:bottom-0 before:left-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
              <div className="rounded-xl overflow-hidden">
                <img src={doctor3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PART 4 */}
      <div className="relative flex  flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="w-full items-center mx-auto max-w-screen-lg">
          <div className="group grid w-full grid-cols-2">
            <div className="pr-16 relative flex items-end flex-col before:block">
              <div className="rounded-xl overflow-hidden">
                <img src={doctor4} alt="" />
              </div>
            </div>
            <div className="pl-16 relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-blue-500 before:bottom-0 before:left-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
              <div>
                <div className="pr-18">
                  <p className="peer mb-6 text-gray-400">
                    <h3 className="mb-4 font-semibold text-xl text-gray-400">
                      Dr. Alexander Lee
                    </h3>
                    Dr. Alexander Lee is a passionate advocate for oral health
                    and strives to make a positive impact on his patients' lives
                    through comprehensive dental care. With a focus on patient
                    comfort and satisfaction, he goes above and beyond to ensure
                    that each visit to his practice is a pleasant experience.
                  </p>
                  <p className="mb-6 text-gray-400">
                    <h3 className="mb-4 font-semibold text-xl text-gray-400">
                      Education
                    </h3>
                    <li>Bachelor of Arts in Chemistry, Stanford University</li>
                    <li>
                      Doctor of Dental Surgery (DDS), University of California,
                      San Francisco School of Dentistry
                    </li>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PART 5 */}
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="w-full items-center mx-auto max-w-screen-lg">
          <div className="group grid w-full grid-cols-2">
            <div>
              <div className="pr-12">
                <p className="peer mb-6 text-gray-400">
                  <h3 className="mb-4 font-semibold text-xl text-gray-400">
                    Dr. Emily Chen
                  </h3>
                  Dr. Emily Chen is a caring and compassionate dentist who is
                  dedicated to helping her patients achieve and maintain healthy
                  smiles. With a gentle touch and a friendly demeanor, she
                  strives to create a warm and welcoming environment where
                  patients feel comfortable and valued.
                </p>
                <p className="mb-6 text-gray-400">
                  <h3 className="mb-4 font-semibold text-xl text-gray-400">
                    Education
                  </h3>
                  <li>
                    Bachelor of Science in Biology, University of California,
                    Los Angeles
                  </li>
                  <li>
                    Doctor of Dental Medicine (DMD), University of Washington
                    School of Dentistry
                  </li>
                </p>
              </div>
            </div>
            <div className="pl-16 relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-blue-500 before:bottom-0 before:left-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
              <div className="rounded-xl overflow-hidden">
                <img src={doctor5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PART 6 */}
      <div className="relative flex  flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="w-full items-center mx-auto max-w-screen-lg">
          <div className="group grid w-full grid-cols-2">
            <div className="pr-16 relative flex items-end flex-col before:block">
              <div className="rounded-xl overflow-hidden">
                <img src={doctor6} alt="" />
              </div>
            </div>
            <div className="pl-16 relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-blue-500 before:bottom-0 before:left-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
              <div>
                <div className="pr-18">
                  <p className="peer mb-6 text-gray-400">
                    <h3 className="mb-4 font-semibold text-xl text-gray-400">
                      Dr. Javier Rodriguez
                    </h3>
                    Dr. Javier Rodriguez is a dedicated and experienced dentist
                    who is committed to providing excellence in dental care to
                    his patients. With a focus on patient-centered care and the
                    latest advancements in dentistry, he strives to deliver
                    superior results and exceed his patients' expectations.
                  </p>
                  <p className="mb-6 text-gray-400">
                    <h3 className="mb-4 font-semibold text-xl text-gray-400">
                      Education
                    </h3>
                    <li>
                      Bachelor of Science in Biochemistry, University of Texas
                      at Austin
                    </li>
                    <li>
                      Doctor of Dental Surgery (DDS), University of Texas Health
                      Science Center at San Antonio
                    </li>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}

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
                <div className="flex mt-8 space-x-6 text-gray-600">
                  <a
                    href="https://www.facebook.com/"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <FaFacebookF size={25} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <FaTwitter size={25} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <FaLinkedinIn size={25} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <FaInstagram size={25} />
                  </a>
                </div>
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
                          hover="text-gray-900"
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
                          href="/reviews"
                        >
                          Reviews
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="/finance-records"
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
  );
}
