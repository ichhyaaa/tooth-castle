import React, { useState, useEffect } from "react";
import SideBar from "../../Components/Admin/SideBar";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Admin/Header";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Doctors() {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState([]);
  const [editingRows, setEditingRows] = useState({});
  const [editingInputValues, setEditingInputValues] = useState({});

  useEffect(() => {
    handleGetDoctor();
  }, []);

  const initialData = {
    _id: "",
    first_name: "",
    last_name: "",
    email: "",
    role: "",
    address: "",
  };

  const handleCreate = () => {
    const newData = {
      ...initialData,
      _id: Math.random().toString(36).substr(2, 9),
    };
    setDoctor([newData, ...doctor]);
    setEditingRows({ ...editingRows, [newData._id]: true });
    setEditingInputValues({ ...editingInputValues, [newData._id]: newData });
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

  const handleUpdateDoctor = (id) => {
    axios
      .put(
        "http://localhost:8000/api/admin/doctor/" + id,
        editingInputValues[id]
      )
      .then((res) => {
        toast.success(res.data.message);
        setEditingRows({ ...editingRows, [id]: false });
        handleGetDoctor();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/api/admin/doctor/" + id)
      .then((res) => {
        toast.success(res.data.message);
        handleGetDoctor();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  const handleGetDoctor = () => {
    axios
      .get("http://localhost:8000/api/admin/doctor")
      .then((data) => {
        setDoctor(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleToggleEdit = (id) => {
    setEditingRows((prevEditingRows) => ({
      ...prevEditingRows,
      [id]: !prevEditingRows[id],
    }));

    if (!editingRows[id]) {
      setEditingInputValues((prevEditingRows) => ({
        ...prevEditingRows,
        [id]: doctor.find((doc) => doc._id === id),
      }));
    }
  };

  return (
    <>
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
                Doctors</h1>
              </div>
            <div className="pt-6 px-4 mb-6 flex justify-end">
              <button
                onClick={handleCreate}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Create
              </button>
            </div>
            <section className="container px-4 mx-auto">
              <div className="flex flex-col">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                          <tr>
                            <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              <div className="flex items-center gap-x-3">
                                <input
                                  type="checkbox"
                                  className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                                />
                                <button className="flex items-center gap-x-2">
                                  <span>Doctor ID</span>
                                </button>
                              </div>
                            </th>
                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              First Name
                            </th>
                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              Last Name
                            </th>
                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              Email
                            </th>
                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              Role
                            </th>
                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              Address
                            </th>
                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody
                          className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                          id="table-body"
                        >
                          {doctor.map((data) => (
                            <tr key={data._id}>
                              <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                <div className="inline-flex items-center gap-x-3">
                                  <input
                                    type="checkbox"
                                    className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                                  />
                                  <span>{data._id}</span>
                                </div>
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                {editingRows[data._id] ? (
                                  <input
                                    type="text"
                                    className="border-2"
                                    name="first_name"
                                    value={
                                      editingInputValues[data._id]
                                        ?.first_name || ""
                                    }
                                    onChange={(e) =>
                                      handleInputValues(
                                        data._id,
                                        e.target.value,
                                        "first_name"
                                      )
                                    }
                                  />
                                ) : (
                                  data.first_name
                                )}
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                {editingRows[data._id] ? (
                                  <input
                                    type="text"
                                    className="border-2"
                                    name="last_name"
                                    value={
                                      editingInputValues[data._id]?.last_name ||
                                      ""
                                    }
                                    onChange={(e) =>
                                      handleInputValues(
                                        data._id,
                                        e.target.value,
                                        "last_name"
                                      )
                                    }
                                  />
                                ) : (
                                  data.last_name
                                )}
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                {editingRows[data._id] ? (
                                  <input
                                    type="email"
                                    className="border-2"
                                    name="email"
                                    value={
                                      editingInputValues[data._id]?.email || ""
                                    }
                                    onChange={(e) =>
                                      handleInputValues(
                                        data._id,
                                        e.target.value,
                                        "email"
                                      )
                                    }
                                  />
                                ) : (
                                  data.email
                                )}
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                {editingRows[data._id] ? (
                                  <input
                                    type="text"
                                    className="border-2"
                                    name="role"
                                    value={
                                      editingInputValues[data._id]?.role || ""
                                    }
                                    onChange={(e) =>
                                      handleInputValues(
                                        data._id,
                                        e.target.value,
                                        "role"
                                      )
                                    }
                                  />
                                ) : (
                                  data.role
                                )}
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                {editingRows[data._id] ? (
                                  <input
                                    type="text"
                                    className="border-2"
                                    name="address"
                                    value={
                                      editingInputValues[data._id]?.address ||
                                      ""
                                    }
                                    onChange={(e) =>
                                      handleInputValues(
                                        data._id,
                                        e.target.value,
                                        "address"
                                      )
                                    }
                                  />
                                ) : (
                                  data.address
                                )}
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                {editingRows[data._id] ? (
                                  <button
                                    onClick={() => handleUpdateDoctor(data._id)}
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                                  >
                                    Save
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => handleToggleEdit(data._id)}
                                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
                                  >
                                    Edit
                                  </button>
                                )}
                                <button
                                  onClick={() => handleDelete(data._id)}
                                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-2"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
