import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import services1 from "../../Assets/services1.png";
import services4 from "../../Assets/services4.png";
import services5 from "../../Assets/services5.png";
import services6 from "../../Assets/services6.png";
import Header from "../../Components/Header";

// const [showMore, setShowMore] = useState(false);

const navigation = [
  { name: "About us", href: "/about_us" },
  { name: "Services", href: "/services" },
  { name: "Reviews", href: "/review" },
  { name: "Financial Records", href: "financial_record" },
];

export default function Services() {
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
              OUR SERVICES
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
      <div className="">
        <div className="flex flex-col items-center p-8 space-y-8 bg-gray-100">
          <h1 className="text-5xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">
            Our Services
          </h1>
          <h2 className="text-xl font-bold text-center">
            Tooth Castle Hospital offers modern dental and oral health care.
            With our outstanding oral treatments, you'll have the brightest
            smiles around.
          </h2>
        </div>
      </div>

      {/* PART 1 */}
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="w-full items-center mx-auto max-w-screen-lg">
          <div className="group grid w-full grid-cols-2">
            <div>
              <div className="pr-12">
                <p className="peer mb-6 text-gray-400">
                  <h3 className="mb-4 font-semibold text-xl text-gray-400">
                    Tooth Extraction
                  </h3>
                  Tooth extraction is the removal of a tooth from its socket in
                  the jawbone. It's done to alleviate pain, prevent infection,
                  create space for orthodontic treatment, manage wisdom teeth,
                  prepare for dentures, treat periodontal disease, or address
                  dental trauma.
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
                <br></br>
                <h3 className="mb-4 font-semibold text-xl text-gray-400">
                  Price
                </h3>
                <p className="mb-6 text-gray-400">$ 12</p>
              </div>
            </div>
            <div className="pl-16 relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-blue-500 before:bottom-0 before:left-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
              <div className="rounded-xl overflow-hidden">
                <img src={services1} alt="" />
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
                <img src={services4} alt="" />
              </div>
            </div>
            <div className="pl-16 relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-blue-500 before:bottom-0 before:left-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
              <div>
                <div className="pr-18">
                  <p className="peer mb-6 text-gray-400">
                    <h3 className="mb-4 font-semibold text-xl text-gray-400">
                      Teeth Whitening
                    </h3>
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
                  <br></br>
                  <h3 className="mb-4 font-semibold text-xl text-gray-400">
                    Price
                  </h3>
                  <p className="mb-6 text-gray-400">$ 10</p>
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
                    Routine Dental
                  </h3>
                  A routine dental check-up, also known as a dental examination
                  or dental check-up, is a standard preventive dental care
                  appointment that individuals typically undergo every six
                  months or as recommended by their dentis
                </p>
                <p className="mb-6 text-gray-400">
                  The purpose of a routine dental check-up is to assess and
                  maintain oral health by identifying any potential issues early
                  and preventing dental problems from worsening.
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
                <br></br>
                <h3 className="mb-4 font-semibold text-xl text-gray-400">
                  Price
                </h3>
                <p className="mb-6 text-gray-400">$ 12</p>
              </div>
            </div>
            <div className="pl-16 relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-blue-500 before:bottom-0 before:left-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
              <div className="rounded-xl overflow-hidden">
                <img src={services5} alt="" />
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
                <img src={services6} alt="" />
              </div>
            </div>
            <div className="pl-16 relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-blue-500 before:bottom-0 before:left-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
              <div>
                <div className="pr-18">
                  <p className="peer mb-6 text-gray-400">
                    <h3 className="mb-4 font-semibold text-xl text-gray-400">
                      Root Canal Therapy
                    </h3>
                    Root canal therapy, also known as endodontic treatment, is a
                    dental procedure performed to treat infections or damage
                    within the pulp of a tooth. The pulp is the soft tissue
                    inside the tooth that contains nerves, blood vessels, and
                    connective tissue. When the pulp becomes infected or
                    inflamed, typically due to deep decay, a cracked or
                    fractured tooth, repeated dental procedures on the tooth, or
                    trauma, root canal therapy may be necessary to save the
                    tooth and alleviate pain.
                  </p>
                  <p className="mb-6 text-gray-400">
                    Root canal therapy effectively removes infection, alleviates
                    pain, and saves the natural tooth from extraction. By
                    preserving the tooth's structure and function, root canal
                    treatment helps maintain proper chewing ability, speech, and
                    jaw alignment, while also preventing adjacent teeth from
                    shifting and reducing the need for more extensive dental
                    work in the future.
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
                  <br></br>
                  <h3 className="mb-4 font-semibold text-xl text-gray-400">
                    Price
                  </h3>
                  <p className="mb-6 text-gray-400">$ 19</p>
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
