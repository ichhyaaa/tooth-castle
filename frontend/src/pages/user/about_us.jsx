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
// import doctor8 from "../Assets/doctor8.png";
// import doctor9 from "../Assets/doctor9.png";
// import doctor10 from "../Assets/doctor10.png";

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
              <a href="/appointment" className="-m-1.5 p-1.5">
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
                  The profession of orthodontics focuses on correcting
                  malpositioned teeth and jaws. For example, you should have
                  orthodontic treatment if your teeth are misaligned. Large
                  spaces between teeth, overbites, underbites, crossbite,
                  misaligned midlines, and open bites are among the other
                  issues.
                </p>
                <p className="mb-6 text-gray-400">
                  Orthodontists use braces, aligners, and other appliances to
                  straighten teeth, improve bite, and enhance oral health and
                  aesthetics. By aligning teeth properly, orthodontics helps
                  prevent dental issues like cavities and gum disease, while
                  also improving facial appearance and boosting self-confidence.
                </p>
                <h3 className="mb-4 font-semibold text-xl text-gray-400">
                  Importance of using dental braces
                </h3>
                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"
                >
                  <li>Improves bite function.</li>
                  <li>Provides versatile treatment options.</li>
                  <li>Offers long-lasting benefits.</li>
                </ul>
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
                    Tooth extraction is the removal of a tooth from its socket
                    in the jawbone. It's done to alleviate pain, prevent
                    infection, create space for orthodontic treatment, manage
                    wisdom teeth, prepare for dentures, treat periodontal
                    disease, or address dental trauma.
                  </p>
                  <p className="mb-6 text-gray-400">
                    Tooth extraction removes a tooth from its socket in the
                    jawbone. It addresses various dental issues such as severe
                    decay, infection, overcrowding, impacted wisdom teeth, or
                    damaged teeth due to trauma. The procedure aims to alleviate
                    pain, prevent infection from spreading, improve oral health,
                    and prepare for further dental treatments like dentures or
                    orthodontics.
                  </p>
                  <h3 className="mb-4 font-semibold text-xl text-gray-400">
                    Importance of using Tooth Extraction
                  </h3>
                  <ul className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500">
                    <li>Prevents infection spread.</li>
                    <li>Relieves pain.</li>
                    <li>Manages wisdom teeth.</li>
                  </ul>
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
                <p className="peer mb-6 text-gray-400">11111111111111</p>
                <p className="mb-6 text-gray-400">22222222222222</p>
                <h3 className="mb-4 font-semibold text-xl text-gray-400">
                  Importance of using
                </h3>
                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"
                >
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
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
                    Teeth whitening is a procedure to lighten teeth color,
                    removing stains and discoloration using bleaching agents,
                    either at the dentist's office or with home kits, for a
                    brighter smile and improved appearance.
                  </p>
                  <p className="mb-6 text-gray-400">
                    Teeth whitening removes stains and discoloration from the
                    teeth, resulting in a brighter and whiter smile. It helps
                    improve the appearance of teeth, enhancing overall smile
                    aesthetics and boosting self-confidence.
                  </p>
                  <h3 className="mb-4 font-semibold text-xl text-gray-400">
                    Importance of using Teeth Whitening
                  </h3>
                  <ul
                    role="list"
                    className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"
                  >
                    <li>Enhances appearance</li>
                    <li>Reverses aging effects</li>
                    <li>Improves oral hygiene awareness</li>
                  </ul>
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
                  Endodontics is a branch of dentistry focused on diagnosing and
                  treating issues related to the dental pulp and tissues inside
                  the tooth, including root canals. It involves procedures such
                  as root canal therapy to save teeth with infected or damaged
                  pulp, relieving pain and restoring oral health.
                </p>
                <p className="mb-6 text-gray-400">
                  Endodontics specializes in diagnosing and treating problems
                  related to the dental pulp and tissues inside the tooth. This
                  includes performing procedures like root canal therapy to save
                  teeth with infected or damaged pulp, alleviating pain, and
                  preserving oral health. User
                </p>
                <h3 className="mb-4 font-semibold text-xl text-gray-400">
                  Importance of using Endodontics
                </h3>
                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"
                >
                  <li>Saves teeth from extraction.</li>
                  <li>Treats infected or inflamed dental pulp.</li>
                  <li>Prevents spread of infection to surrounding tissues.</li>
                </ul>
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
                    Oral pathology is the study and diagnosis of diseases
                    affecting the mouth, jaws, and related structures. It
                    involves identifying and managing conditions like
                    infections, tumors, and developmental abnormalities through
                    tissue examination and diagnostic tools. Treatment may
                    require collaboration with other specialists for
                    comprehensive care.
                  </p>
                  <p className="mb-6 text-gray-400">
                    Oral pathology diagnoses and manages diseases and conditions
                    affecting the mouth and related structures, including
                    infections, tumors, and developmental abnormalities.
                  </p>
                  <h3 className="mb-4 font-semibold text-xl text-gray-400">
                    Imporatnce of using Oral Pathology
                  </h3>
                  <ul
                    role="list"
                    className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"
                  >
                    <li>Diagnoses diseases accurately.</li>
                    <li>Prevents complications.</li>
                    <li>Guides effective treatment.</li>
                  </ul>
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
