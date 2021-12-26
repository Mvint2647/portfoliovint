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
        "user_MXxCjBwYDlOsRwN4loBYT",
      )
      .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    e.target.reset();
  }

  return (
    <div>
      <h5>Currently out of order</h5>
      <div className="Container">
        <form onSubmit={sendEmail}>
          <div className="row">
            <div className="row1">
              <input
                type="text"
                className="form"
                placeholder=" "
                name="name"
              />
            </div>
            <div className="row1">
              <input
                type="email"
                className="form1"
                placeholder=" "
                name="email"
              />
            </div>
            <div className="row1">
              <input
                type="text"
                className="form"
                placeholder=" "
                name="subject"
              />
            </div>
            <div className="row1">
              <textarea
                className="form"
                id=""
                cols="30"
                rows="8"
                placeholder=" "
                name="message"
              ></textarea>
            </div>
            <div className="button">
              <input type="submit" className="btn" value="Send Message"></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
