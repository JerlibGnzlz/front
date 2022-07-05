import React from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
//import { useNavigate } from "react-router-dom";

function CheckoutAddress() {
  //const navigate = useNavigate();

  

  const validate = Yup.object({
    // names: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
    // lastNames: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
    email: Yup.string().email("Invalid email"),
    postalCode: Yup.string()
      .min(4, "Must be at least 4 charaters")
      .required("Required"),
    state: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    annotations: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        // names: "",
        // lastNames: "",
        email: "",
        postalCode: "",
        state: "",
        city: "",
        address: "",
        annotations: "",
      }}
      validationSchema={validate}
      
      onSubmit={(values) => {
        // console.log(values, 'valores')
      axios.post('http://localhost:3001/userAddress', values).then((response)=>{
        // console.log('Shipping information added successfully')
        Swal.fire({
          // position: 'center',
          // icon: 'success',
          title: "Information added successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        // navigate("/mercadopago");
        
      })
       
      }}
    >
      {(formik, errors, touched) => (
        <Form >
          <h2 className="mt-10 text-xl text-white font-bold ">
            Contact information
          </h2>

          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-md font-medium text-white"
            
            >
              Email address
            </label>

            <div className="mt-1">
              <Field
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className={`"text-black font-bold lg:text-primary block w-full py-3  border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-tertiary placeholder:pl-2" ${
                  touched && errors && "is-invalid"
                }`}
              />
              <ErrorMessage
                component="div"
                name="email"
                className="text-red-700"
              />
            </div>
          </div>

          {/* Shipping information */}
          <div className="mt-4 pt-4">
            <h2 className="text-xl font-bold text-white">
              Shipping information
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              {/* <div>
                <label
                  htmlFor="first-name"
                  className="block text-md font-medium text-white"
                >
                  First name
                </label>
                <div className="mt-1">
                  <Field
                    type="text"
                    id="first-name"
                    name="names"
                    autoComplete="given-name"
                    className="text-black font-bold block w-full py-3 border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-tertiary placeholder:pl-2"
                  />
                  <ErrorMessage
                    component="div"
                    name="names"
                    className="text-red-400"
                  />
                </div>
              </div> */}

              {/* <div>
                <label
                  htmlFor="last-name"
                  className="block text-md font-medium text-white "
                >
                  Last name
                </label>
                <div className="mt-1">
                  <Field
                    type="text"
                    id="last-name"
                    name="lastNames"
                    autoComplete="family-name"
                    className="text-black font-bold block w-full py-3 border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-tertiary placeholder:pl-2"
                  />
                  <ErrorMessage
                    component="div"
                    name="lastNames"
                    className="text-red-400"
                  />
                </div>
              </div> */}

              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="block text-md font-medium text-white"
                >
                  Address
                </label>
                <div className="mt-1">
                  <Field
                    type="text"
                    name="address"
                    id="address"
                    autoComplete="street-address"
                    className="text-black font-bold block w-full py-3 border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-tertiary placeholder:pl-2"
                  />
                  <ErrorMessage
                    component="div"
                    name="address"
                    className="text-red-400"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="apartment"
                  className="block text-md font-medium text-white"
                >
                  Apartment, suite, etc.
                </label>
                <div className="mt-1">
                  <Field
                    type="text"
                    name="annotations"
                    id="apartment"
                    className="text-black font-bold block w-full py-3 border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-tertiary placeholder:pl-2"
                  />
                  <ErrorMessage
                    component="div"
                    name="annotations"
                    className="text-red-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="block text-md font-medium text-white"
                >
                  State
                </label>
                <div className="mt-1">
                  <Field
                    type="text"
                    name="state"
                    id="city"
                    className="text-black font-bold block w-full py-3 border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-tertiary placeholder:pl-2"
                  />
                  <ErrorMessage
                    component="div"
                    name="state"
                    className="text-red-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-md font-medium text-white"
                >
                  City
                </label>
                <div className="mt-1">
                  <Field
                    id="country"
                    name="city"
                    autoComplete="city"
                    className="text-black font-bold block w-full py-3 border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-tertiary placeholder:pl-2"
                  />
                  <ErrorMessage
                    component="div"
                    name="city"
                    className="text-red-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="postal-code"
                  className="block text-md font-medium text-white"
                >
                  Postal code
                </label>
                <div className="mt-1">
                  <Field
                    type="text"
                    name="postalCode"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="text-black font-bold block w-full py-3 border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-tertiary placeholder:pl-2"
                  />
                  <ErrorMessage
                    component="div"
                    name="postalCode"
                    className="text-red-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-md font-medium text-white"
                >
                  Phone
                </label>
                <div className="mt-1">
                  <Field
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="text-black font-bold block w-full py-3 border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-tertiary placeholder:pl-2"
                  />
                  <ErrorMessage
                    component="div"
                    name="phone"
                    className="text-red-400"
                  />
                </div>
              </div>
            </div>

              <button onSubmit={formik.handleSubmit}
                type="submit"
                className="w-full mt-10 bg-primary border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary"
              >
                Confirm Information
              </button>
         
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CheckoutAddress;