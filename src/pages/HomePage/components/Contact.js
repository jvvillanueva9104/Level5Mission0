import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactForm" id="subs">
      <h1 className="contactText">GET STARTED!</h1>
      <div className="contactTextContainer">
        <p className="contactPar">
          Ready to get your hands on some skate gears? Don't let your dream
          skate gears slip away. Sign up now to get notified once fresh stocks
          becomes available!
        </p>

        <div className="subscribeSection">
          <form>
            <input
              className="subscribeBox"
              type="text"
              placeholder="name@email.com"
            />
            <button className="subsBtn">Subscribe!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
