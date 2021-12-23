import emailjs from "emailjs-com";
import React from "react";
import "./EmailEl.css";

export default function ContactMe() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_87m4d2q",
        e.target,
        "user_MXxCjBwYDlOsRwN4loBYT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      
      <div className="Container">
      <h1 className="h1">Email me for Services</h1>
        <form onSubmit={sendEmail}>
          <div className="row">
            <div className="row1">
              <input
                type="text"
                className="form"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="row1">
              <input
                type="email"
                className="form"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="row1">
              <input
                type="text"
                className="form"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="row1">
              <textarea
                className="form"
                id=""
                cols="30"
                rows="8"
                placeholder="Your Message"
                name="message"
              ></textarea>
            </div>
            <div className="row1">
              <input
                type="submit"
                className="btn"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
