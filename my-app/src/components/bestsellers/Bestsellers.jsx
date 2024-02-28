import React from "react";
import "./Bestsellers.css";
import Photo1 from "../../Photos/Photo1.png";
import Photo2 from "../../Photos/Photo2.png";
import Photo3 from "../../Photos/Photo3.png";
import Photo4 from "../../Photos/Photo4.png";

function Bestsellers() {
  return (
    <section className="bestsellers">
      <h1>Our bestsellers</h1>
      <div className="box-container">
        <div className="box">
          <div className="saletag">
            <p>SALE</p>
          </div>
          <div className="box-header">
            <a href="">
              <img src={Photo1} alt="ProductPhoto" />
            </a>
          </div>
          <div className="productName">
            <h3>'Candy' Flowerpot</h3>
          </div>
          <div className="productPrice">
            <p>
              <span id="Discount">$59.90</span> $49.90
            </p>
          </div>
        </div>
        <div className="box">
        <div className="saletag">
            <p>SALE</p>
          </div>
          <div className="box-header">
            <a href="">
              <img src={Photo2} alt="ProductPhoto" />
            </a>
          </div>
          <div className="productName">
            <h3>'Drop' Vase</h3>
          </div>
          <div className="productPrice">
            <p>
              <span id="Discount"> $49.90 </span> $40.90
            </p>
          </div>
        </div>
        <div className="box">
          <div className="box-header">
            <a href="">
              <img src={Photo3} alt="ProductPhoto" />
            </a>
          </div>
          <div className="productName">
            <h3>'Wave' Vase
</h3>
          </div>
          <div className="productPrice">
            <p>
            <span id="soldout">SOLD OUT</span> 
            </p>
          </div>
        </div>
        <div className="box">
          <div className="box-header">
            <a href="">
              <img src={Photo4} alt="ProductPhoto" />
            </a>
          </div>
          <div className="productName">
            <h3>'Sun' Vase</h3>
          </div>
          <div className="productPrice">
            <p>
              $69.90
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bestsellers;
