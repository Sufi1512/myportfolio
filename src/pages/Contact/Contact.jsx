import React from 'react'
import "./Contact.css"
import contact from "../../components/resources/Images/contact-us.png"

const Contact = () => {
  return (
    <>
          <div className="contact">
              <div className="card card0 border-0">
                  <div className="row">
                      <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                          <div className="card1 ">
                              <div className="row border-line">
                                    <img src={contact} className="logo" alt="logo" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
      </div>
    </>
  )
}

export default Contact
