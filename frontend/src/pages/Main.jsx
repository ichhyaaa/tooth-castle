import React, { useState } from "react";
import logo from "../Assets/logo.png";
import doctor from "../Assets/doctor.png";
import patient from "../Assets/patient.png";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  const handleNavigate = (role) => {
    navigate(`/login`, {
      state: {
        role: role,
      },
    });
  };

  return (
    <div className="my-52 mx-auto w-96 h-72 flex-col border-2 solid border-black overflow-hidden">
      <div>
        <img
          className="my-10 mx-auto h-5 items-center justify-center"
          src={logo}
          alt="Dental Clinic"
        />
      </div>
      <div className="flex justify-center text-2xl ">
        <h1> Are you </h1>
      </div>
      <div className="flex justify-around items-center">
        <div
          style={{
            textDecorationColor: "rgb(79 70 229)",
            color: "rgb(79 70 229)",
            cursor: "pointer",
          }}
          onClick={() => handleNavigate("doctor")}
        >
          <img className="my-3 h-14 " src={doctor} alt="Doctor Profile" />
          Doctor
        </div>

        <div
          style={{
            textDecorationColor: "rgb(79 70 229)",
            color: "rgb(79 70 229)",
            cursor: "pointer",
          }}
          onClick={() => handleNavigate("user")}
        >
          <img className="my-3 h-14 " src={patient} alt="Patient Profile" />
          Patients
        </div>
      </div>
    </div>
  );
}
