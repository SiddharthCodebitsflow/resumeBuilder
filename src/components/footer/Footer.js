import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import {BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="first">
          <h3>Codebitsflow Software Solutions Pvt. Ltd. </h3>
          <p>
            Codebitsflow Software solutions is a software <br />
            development company that specializes in <br />
            creating cutting-edge solutions for a <br />
            wide range of industries. Founded in 2023
          </p>
        </div>

        <div className="second">
          <h3>Subscribe to get important updates</h3>
          <input type="text" placeholder="EMAIL" className="email" />
          <button className="btn">SUBSCRIBE</button>
        </div>

        <div className="third">
          <h3>Follow Us</h3>
          <div className="social">
            <BsFacebook />
            <GrInstagram />
            <AiFillTwitterCircle />
            <BsLinkedin/>
          </div>
        </div>

        <div className="fourth">
          <h3>Call Us</h3>
          <p>Meerut Uttar pardesh| 250406</p>
          <p>+91 9193933431</p>
          <p>info@codebitsflow.com</p>
        </div>
      </div>

      <hr />

      <div className="lower-footer">
        <div className="lower-left">
          <h3>
            @2023 Codebitsflow Software Solutions Pvt. Ltd. All Rights Reserved{" "}
          </h3>
        </div>

        <div className="lower-right">
          <h3>PRIVACY POLICY</h3>
          <h3>TERMS & CONDITIONS</h3>
        </div>
      </div>
    </div>
  );
}
