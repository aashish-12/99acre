import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <section>
      <div className={classes.img}>
        <img src={props.logo} alt="img" />
      </div>
      <div>
        <div className={classes.content}>
          <h2>{props.name}</h2>
          <p>{props.flat}</p>
          <div>Near By: {props.nearby}</div>
          <h2>Rs. {props.price} Cr</h2>
          <div className={classes.content_apartments}>
            <div className={classes.apartment}>
              <h3>1 BHK Apartment</h3>
              <div className={classes.apartment_content}>
                <p>Super Build-up Area</p>
                <p>824 sq ft.</p>
                <h4>Price on Request</h4>
              </div>
            </div>
            <div className={classes.apartment}>
              <h3>2 BHK Apartment</h3>
              <div className={classes.apartment_content}>
                <p>Super Build-up Area</p>
                <p>824 sq ft.</p>
                <h4>Price on Request</h4>
              </div>
            </div>
          </div>
          <div className={classes.buttons}>
            <p>Brochure</p>
            <p>View Number</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
