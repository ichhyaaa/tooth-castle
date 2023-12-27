import React, { useState } from "react";
import logo from "../Assets/logo.png";
import doctor from "../Assets/doctor.png";
import patient from "../Assets/patient.png";


export default function Main() {
	return (
		<div className="flex-col border-2 solid border-black w-20 h-52 m-auto items-center justify-center">
			<div>
				<img className="mx-auto h-5 w-auto" src={logo} alt="Dental Clinic" />
			</div>
			<div className="flex justify-center">
				<h1> Are you </h1>
			</div>
			<div>
				<img
					className="mx-auto h-5 w-auto"
					src={doctor}
					alt="Doctor Profile"
				/>
			</div>
			<div>
				<img
					className="mx-auto h-5 w-auto"
					src={patient}
					alt="Patient Profile"
				/>
			</div>
		</div>
	);
}
