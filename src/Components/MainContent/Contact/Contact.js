import React, { useState } from "react";

//styles
import "./Contact.scss";

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <form onSubmit={onSubmitHandler}>
          <div className="line-one">
            <div className="form-control">
              <label for="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={form.firstName}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-control">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={form.lastName}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="line-two">
            <div className="form-control">
              <label for="company">Company Name</label>
              <input
                type="text"
                name="company"
                id="company"
                value={form.company}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-control">
              <label for="contactNumber">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                id="contactNumber"
                value={form.contactNumber}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="form-control">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control">
            <label for="message">Message</label>
            <textarea
              rows="10"
              cols={10}
              name="message"
              id="message"
              value={form.message}
              onChange={onChangeHandler}
            />
          </div>
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
