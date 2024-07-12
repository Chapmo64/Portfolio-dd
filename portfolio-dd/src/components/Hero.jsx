import React from "react";

export const Hero = () => {
  return (
    <div className="d-flex">
    <div
      className="hero page-header min-vh-100"
      style={{
        backgroundImage: "url(Hero101.png)",
      }}
      loading="lazy">
      <span className="mask bg-gradient-dark opacity-5" />
      <div className="container d-block">
        <div className="row">
          <div className="hero-section .balsamiq-sans-bold col-lg-6 col-md-7 d-flex justify-content-center flex-column">
            <div className="hero-box"></div>
            <h3 className="hero-name0 ">I AM</h3>
            <h1 className="hero-name1 mb-4">JASHANPREET SINGH</h1>
            <p className="hero-name2 opacity-8 lead pe-5 me-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              minus quasi quae veritatis quidem consequatur in, ipsam odio unde
              pariatur consectetur veniam nesciunt labore a nisi explicabo ad
              voluptatum perferendis..{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="heroImg">
      <img src="hero101-1.png" alt="" />
    </div>
    </div>
  );
};
