import React from "react";
import "./Contact.css";
import contact from "../../components/resources/Images/contact-us.png";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6">
            <div className="card1">
              <div className="row border-line">
                <img src={contact} className="logo" alt="logo" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card2 card border-0 px-4 py-5">
              <div className="row">
                <div className="col-md-12">
                  <h6>Contact with icon</h6>
                </div>
              </div>
              <div className="row px-3 mb-4">
                <div className="line" />
                <small className="or text-center">OR</small>
                <div className="line" />
              </div>
              <div className="row px-3">
                <div className="col-md-12 mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    className="form-control"
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="form-control"
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <textarea
                    type="text"
                    name="msg"
                    placeholder="Write your message"
                    className="form-control"
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <button type="submit" className="btn btn-primary btn-block">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
