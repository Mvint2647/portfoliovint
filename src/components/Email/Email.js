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
        <form onSubmit={sendEmail}>
          <div className="row">
            <div className="row1">
              <input
                type="text"
                className="form"
                placeholder=" Your Name"
                name="name"
              />
            </div>
            <div className="row1">
            <h1>Email me for Services <br></br>melissavinny1133@gmail.com</h1>
       
              <input
                type="email"
                className="form1"
                placeholder="Copy and Paste my Email listed above"
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
                placeholder="Your Message & Email here"
                name="message"
              ></textarea>
            </div>
            <div className="row1">
              <input type="submit" className="btn" value="Send Message"></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
