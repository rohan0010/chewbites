import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
// import LocationMap from "../../components/contact/LocationMap";

const Contact = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>ChewyBites | Contact</title>
        <meta
          name="description"
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Contact
      </BreadcrumbsItem>
      <LayoutOne >
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            {/* <div className="contact-map mb-10"> */}
              {/* <LocationMap latitude="28.4744" longitude="77.5040" /> */}
            {/* </div> */}
            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>9958544350</p>
                      <p>9810230941</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:chewbites8@gmail.com">chewbites8@gmail.com</a>
                      </p>
                      <p>
                        <a href="//chewbites.com/">https://chewbites.com/</a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                    
                      <p> CHEWY BITES LLP
                        <br/>
                      Registered Office FLAT NO. 09114,                        <br/>
                      TOWER ALPINE MAHAGUN MYWOODS                         <br/>
                      SECTOR 
         16C
, 
GREATER NOIDA WEST,                        <br/>
Uttar Pradesh,201306,                        <br/>


PAN - AAQFC7871H
<br/>

MAIN OBJECT  –                          <br/>
BUSINESS OF HOTELS , RESTAURANT, HOLIDAY CAMPS, GUEST HOUSE, EVENT MANAGEMENT  -----OWNED AND LEASE OUT PROPERTIES FOR THE SUPPORT OF MAIN OBJECT 
<br/>

Director details : 
<br/>

JYOTI NARULA                       <br/>
– DIN- 09076246                       <br/>
PAN – AJRPA0757E,                         <br/>
 ADHAAR – 2073-5851-0765                        <br/>

Email Id- jyotinarula84@gmail.com  ,                        <br/>
 Ph No. 9958544350
 <br/>

ANKUR ARORA                         <br/>
- DIN-  09053243 ,                        <br/>
 PAN- AUZPK3962C, 
Ph. No. 9810230941,                        <br/>
 Email Id - ankur.sqft@gmail.com                        <br/>


 </p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Follow Us</h3>
                    <ul>
                      <li>
                        <a href="//facebook.com">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="//pinterest.com">
                          <i className="fa fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="//thumblr.com">
                          <i className="fa fa-tumblr" />
                        </a>
                      </li>
                      <li>
                        <a href="//vimeo.com">
                          <i className="fa fa-vimeo" />
                        </a>
                      </li>
                      <li>
                        <a href="//twitter.com">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Get In Touch</h2>
                  </div>
                  <form className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <input name="name" placeholder="Name*" type="text" />
                      </div>
                      <div className="col-lg-6">
                        <input name="email" placeholder="Email*" type="email" />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          placeholder="Subject*"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Your Message*"
                          defaultValue={""}
                        />
                        <button className="submit" type="submit">
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-messege" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object
};

export default Contact;
