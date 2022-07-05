import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import { useAuth } from "../context/AuthContext.js";

const { REACT_APP_BACKEND_URL } = process.env;

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const UserRegister = () => {
  const navigate = useNavigate();

  const { signup, logout } = useAuth();

  const validate = Yup.object({
    names: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastNames: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(6, "Must be at least 6 charaters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
    email: Yup.string().email("Invalid email").required("Required"),
    // phone: Yup.string().matches(

    //   /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,

    //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,

    //   /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,

    //   "Phone number is not valid"
    // ),
    birthDate: Yup.string()
      .required("Required")
      .test("DOB", "Choose a valid date of birth", (value) => {
        return moment().diff(moment(value), "years") >= 18;
      }),
  });

  const divStyle = {
    backgroundColor: "#0d0d0d",
    backgroundImage: "linear-gradient(149deg, #0d0d0d 59%, #404040 83%)",
  };

  return (
    <Formik
      initialValues={{
        names: "",
        lastNames: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        birthDate: "",
      }}
      validationSchema={validate}
      onSubmit={async (values) => {
        // console.log(values);

        try {
          await signup(values.email, values.password);
          await logout();
        } catch (error) {}

        axios
          .post(`${REACT_APP_BACKEND_URL}/users`, values)
          .then((response) => {
            console.log("Data added successfully.");
            Swal.fire({
              // position: 'center',
              // icon: 'success',
              title: "User created successfully",
              showConfirmButton: false,
              timer: 2000,
            });
            navigate("/login");
          });
      }}
    >
      {(formik) => (
        <div className="flex w-screen bg-zinc-100 text-white h-screen justify-center items-center m-auto ">
          <div
            style={divStyle}
            className="flex flex-col text-center h-fit w-2/5 rounded-md py-10 bg-primary  "
          >
            {/* Boton de regreso */}
            <Link to="/">
              <div className="bg-white w-12 p-1 ml-6 text-black hover:bg-tertiary hover:text-white rounded">
                <button>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
              </div>
            </Link>

            <div className="mb-6 text-4xl font-bold">
              <label>Register</label>
            </div>
            <div className="mb-8 text-md">
              <p>Welcome!</p>
            </div>

            <Form className="mx-10 flex flex-wrap md:justify-center sm:justify-center">
              <TextField
                label="First Name"
                name="names"
                type="text"
                placeholder="John"
              />

              <TextField
                label="Last Name"
                name="lastNames"
                type="text"
                placeholder="Doe"
              />

              <TextField
                label="Password"
                name="password"
                type="password"
                placeholder="******"
              />

              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="******"
              />

              <TextField
                label="Email"
                name="email"
                type="email"
                placeholder="john@dev.com"
              />

              <TextField
                label="Phone"
                name="phone"
                type="text"
                placeholder="1145879293"
              />

              <TextField
                label="Birthdate"
                name="birthDate"
                type="text"
                placeholder="yyyy-mm-dd"
              />

              <div className="mt-20 flex flex-row justify-center space-x-4 ">
                <button
                  className="p-2 w-64 outline-none rounded  text-primary bg-white font-bold hover:bg-tertiary hover:cursor-pointer hover:text-white"
                  type="submit"
                >
                  Register
                </button>

                <button
                  className="p-2 w-64 outline-none rounded  text-primary bg-white font-bold hover:bg-tertiary hover:cursor-pointer hover:text-white"
                  type="reset"
                >
                  Reset
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};
