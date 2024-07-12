import React from "react";

export const Hero = () => {
  return (
    // <div class="hero text-center">
    //   <div className="hero-name">
    //     <h3>I AM</h3>
    //     <h1>JASHANPREET SINGH</h1>
    //   </div>
    // </div>
    <div
      className="hero page-header min-vh-100"
      style={{
        backgroundImage:
          'url(Hero101.png)',
      }}
      loading="lazy">
      <span className="mask bg-gradient-dark opacity-5" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
            <h1 className="text-white mb-4">Material Kit</h1>
            <p className="text-white opacity-8 lead pe-5 me-5">
              The time is now for it be okay to be great. People in this world
              shun people for being nice.{" "}
            </p>
            <div className="buttons">
              <button type="button" className="btn btn-white mt-4">
                Get Started
              </button>
              <button type="button" className="btn text-white shadow-none mt-4">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
