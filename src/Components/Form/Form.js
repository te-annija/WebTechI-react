import "./form.css"
import React from "react";

function Form() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    place: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    place: "",
  });

  const [message, setMessage] = React.useState(""); 

  function handleChange(event) {
    setMessage("");
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    if (formValidation() === 0) {
      // submitToApi(formData)
      setMessage("Your prediction was sent succesfully! ");
      setFormData({
        name: "",
        email: "",
        place: "",
      });
    }
  }

  function formValidation() {
    setErrors({
      name: "",
      email: "",
      place: "",
    });
    
    var errors = 0;

    if (formData.name === "") {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          name: "This field is required",
        };
      });
      errors++;
    }
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (formData.email === "") {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          email: "This field is required",
        };
      });
      errors++;
    } else if (!formData.email.match(validRegex)) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          email: "Invalid email address",
        };
      });
      errors++;
    }
    if (formData.place == "") {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          place: "This field is required",
        };
      });
      errors++;
    } else if (
      !Number.isInteger(Number(formData.place)) &&
      formData.place != ""
    ) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          place: "A number is required",
        };
      });
      errors++;
    } else if (!(formData.place >= 1 && formData.place <= 10)) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          place: "A number should be in interval 1-10",
        };
      });
      errors++;
    }
    return errors;
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      {message != "" && <p className="form__error"> {message} </p>}
      <p>
        Your name*
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <span className="form__error">{errors.name}</span>
      </p>
      <p>
        Your email*
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <span className="form__error">{errors.email}</span>
      </p>
      <p>
        Ferrari place in Constructors' Championship 2022*
        <input
          type="text"
          name="place"
          onChange={handleChange}
          value={formData.place}
        />
        <span className="form__error">{errors.place}</span>
      </p>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
