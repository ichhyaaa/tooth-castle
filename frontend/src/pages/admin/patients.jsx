import React, { useState, useEffect } from "react";
import SideBar from "../../Components/Admin/SideBar";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Admin/Header";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function User() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [editingRows, setEditingRows] = useState([]);
  const [editingInputValues, setEditingInputValues] = useState([]);

  useEffect(() => {
    handleGetUser();
  }, []);

  const initialData = {
    key1: "", // Add all keys from your object here
    key2: "",
    key3: "",
    // Add more keys as needed
  };

  const handleCreate = () => {
    // Create a new object with empty values
    const newData = {};
    Object.keys(initialData).forEach((key) => {
      newData[key] = "";
    });

    // Add the new data object at the beginning of the array
    setUser([newData, ...user]);
  };

  const handleInputValues = (id, value, name) => {
    setEditingInputValues((prevEditingRows) => ({
      ...prevEditingRows,
      [id]: {
        ...prevEditingRows[id],
        [name]: value,
      },
    }));
  };

  const handleUpdateUser = (id) => {
    axios
      .put("http://localhost:8000/api/admin/user/" + id, editingInputValues[id])
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  const handleDelete = (id) => {
    console.log("delete");
    // axios
    //   .delete("http://localhost:8000/api/admin/user/" + id)
    //   .then()
    //   .catch();
  };

  const handleGetUser = () => {
    axios
      .get("http://localhost:8000/api/admin/user")
      .then((data) => {
        console.log(data.data);
        setUser(data.data);
      })
      .catch();
  };

  const handleToggleEdit = (id) => {
    setEditingRows((prevEditingRows) => ({
      ...prevEditingRows,
      [id]: !prevEditingRows[id],
    }));

    console.log(editingRows);
  };

  return (
    <>
      <div>
        <Header />
        <div className="flex overflow-hidden bg-white pt-16">
          <SideBar />

          <div
            className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
            id="sidebarBackdrop"
          ></div>
          <div
            id="main-content"
            className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
          >
            <main>
            <div className="pt-6 px-4 mb-6 flex justify-right">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Patients</h1>
              </div>
              {/* <div className="pt-6 px-4 mb-6 flex justify-end">
                <button
                  onClick={() => handleCreate}
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Create
                </button>
              </div> */}
              <section class="container px-4 mx-auto">
                <div class="flex flex-col">
                  <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                      <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                          <thead class="bg-gray-50 dark:bg-gray-800">
                            <tr>
                              <th
                                scope="col"
                                class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                              >
                                <div class="flex items-center gap-x-3">
                                  <input
                                    type="checkbox"
                                    class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                                  />
                                  <button class="flex items-center gap-x-2">
                                    <span>User ID</span>

                                    <svg
                                      class="h-3"
                                      viewBox="0 0 10 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-width="0.1"
                                      />
                                      <path
                                        d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-width="0.1"
                                      />
                                      <path
                                        d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-width="0.3"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </th>

                              <th
                                scope="col"
                                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                              >
                                First Name
                              </th>

                              <th
                                scope="col"
                                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                              >
                                Last Name
                              </th>

                              <th
                                scope="col"
                                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                              >
                                Email
                              </th>

                              <th
                                scope="col"
                                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                              >
                                Role
                              </th>

                              <th
                                scope="col"
                                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                              >
                                Address
                              </th>

                              <th
                                scope="col"
                                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                              >
                                Action
                              </th>

                              <th scope="col" class="relative py-3.5 px-4">
                                <span class="sr-only">Actions</span>
                              </th>
                            </tr>
                          </thead>

                          <tbody
                            class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                            id="table-body"
                          >
                            {user &&
                              user.map((data) => {
                                return (
                                  <tr key={data._id}>
                                    <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                      <div class="inline-flex items-center gap-x-3">
                                        <input
                                          type="checkbox"
                                          class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                                        />

                                        <span>{data._id}</span>
                                      </div>
                                    </td>

                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                      {editingRows[data._id] ? (
                                        <div>
                                          <div class="mb-3">
                                            <input
                                              type="email"
                                              className="border-2"
                                              name="first_name"
                                              onChange={(e) =>
                                                handleInputValues(
                                                  data._id,
                                                  e.target.value,
                                                  "first_name"
                                                )
                                              }
                                            />
                                          </div>
                                        </div>
                                      ) : (
                                        data.first_name
                                      )}
                                    </td>

                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                      {editingRows[data._id] ? (
                                        <div>
                                          <div class="mb-3">
                                            <input
                                              type="text"
                                              className="border-2"
                                              name="last_name"
                                              onChange={(e) =>
                                                handleInputValues(
                                                  data._id,
                                                  e.target.value,
                                                  "last_name"
                                                )
                                              }
                                            />
                                          </div>
                                        </div>
                                      ) : (
                                        data.last_name
                                      )}
                                    </td>

                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                      {editingRows[data._id] ? (
                                        <div>
                                          <div class="mb-3">
                                            <input
                                              type="text"
                                              className="border-2"
                                              name="email"
                                              onChange={(e) =>
                                                handleInputValues(
                                                  data._id,
                                                  e.target.value,
                                                  "email"
                                                )
                                              }
                                            />
                                          </div>
                                        </div>
                                      ) : (
                                        data.email
                                      )}
                                    </td>

                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                      {editingRows[data._id] ? (
                                        <div>
                                          <div class="mb-3">
                                            <input
                                              type="text"
                                              className="border-2"
                                              name="role"
                                              onChange={(e) =>
                                                handleInputValues(
                                                  data._id,
                                                  e.target.value,
                                                  "role"
                                                )
                                              }
                                            />
                                          </div>
                                        </div>
                                      ) : (
                                        data.role
                                      )}
                                    </td>

                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                      {editingRows[data._id] ? (
                                        <div>
                                          <div class="mb-3">
                                            <input
                                              type="text"
                                              className="border-2"
                                              name="address"
                                              onChange={(e) =>
                                                handleInputValues(
                                                  data._id,
                                                  e.target.value,
                                                  "address"
                                                )
                                              }
                                            />
                                          </div>
                                        </div>
                                      ) : (
                                        data.address
                                      )}
                                    </td>

                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap p-3">
                                      <div>
                                        <button
                                          className="p-3"
                                          onClick={
                                            editingRows[data._id]
                                              ? () => {
                                                  handleToggleEdit(data._id);
                                                  handleUpdateUser(data._id);
                                                }
                                              : () => handleToggleEdit(data._id)
                                          }
                                        >
                                          {editingRows[data._id]
                                            ? "Save"
                                            : "Edit"}
                                        </button>
                                        <button
                                          onClick={() => handleDelete(data._id)}
                                        >
                                          {" "}
                                          Delete{" "}
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex items-center justify-between mt-6">
                  <a
                    href="#"
                    class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 rtl:-scale-x-100"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                      />
                    </svg>

                    <span>previous</span>
                  </a>

                  <div class="items-center hidden md:flex gap-x-3">
                    <a
                      href="#"
                      class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                    >
                      2
                    </a>
                    <a
                      href="#"
                      class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                    >
                      3
                    </a>
                    <a
                      href="#"
                      class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                    >
                      ...
                    </a>
                    <a
                      href="#"
                      class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                    >
                      12
                    </a>
                    <a
                      href="#"
                      class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                    >
                      13
                    </a>
                    <a
                      href="#"
                      class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                    >
                      14
                    </a>
                  </div>

                  <a
                    href="#"
                    class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
                  >
                    <span>Next</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 rtl:-scale-x-100"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </section>
            </main>

            {/* Footer */}
            <footer className="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
              <ul className="flex items-center flex-wrap mb-6 md:mb-0">
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                  >
                    Terms and conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                  >
                    Licensing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-gray-500 hover:underline"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="flex sm:justify-center space-x-6">
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </footer>
            <p className="text-center text-sm text-gray-500 my-10">
              &copy; 2024{" "}
              <a href="#" className="hover:underline" target="_blank">
                Tooth Castle
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </div>
    </>
  );
}
