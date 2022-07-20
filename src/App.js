import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Field Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Username should be an email";
  }

  if (!values.password) {
    errors.password = "Field Required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be at least 4 characters long";
  } else if (values.password.length > 20) {
    errors.password = "Password must be no more than 20 characters long";
  } else if (values.password === "password") {
    errors.password = "Password can not be 'password' ";
  }

  return errors;
};

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("values: " + values);
      console.log("values.email: " + values.email);
      console.log("values.pw: " + values.password);
      console.log("values.pw.length: " + values.password.length);
      alert(JSON.stringify(values, null, 2));
    },
  });
  const sectionStyle = {
    backgroundColor: "#B9CFD4",

    width: "300px",
    borderRadius: "11px",
    padding: "10px 10px 10px 10px",
  };
  const fieldStyle = {
    fontFamily: "Arial",
    paddingLeft: "10px",
    paddingBottom: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#A3A9AA",
    padding: "4px 8px 4px 8px",
    fontSize: "1.05em",
    marginTop: "15px",
    marginLeft: "10px",
    borderRadius: "5px",
  };

  const errorStyle = {
    color: "#9F2042",
  };

  return (
    <div style={sectionStyle}>
      <p style={fieldStyle}>Please Enter Your Credentials Below</p>
      <form onSubmit={formik.handleSubmit}>
        <div style={fieldStyle}>
          <p>Email</p>

          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            placeholder="Email Address"
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={errorStyle}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div style={fieldStyle}>
          <p>Password</p>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            placeholder="Password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={errorStyle}>{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
