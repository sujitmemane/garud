import React from "react";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const MainApp = () => {
  return (
    <div>
      <Navbar />
      <div className="md:px-14 px-4 flex flex-col space-y-4 py-12 items-center justify-center">
        <h1 className="font-bold text-5xl ">
          Track Buses With{" "}
          <span className="text-[#8e5734]">The Route Guardian</span>
        </h1>
        <p className="text-2xl ">Real-time bus tracking for your convenience</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.7650013270645!2d73.88953997553376!3d18.67453846445237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c880546e164f%3A0xe52ca527efd0d1e6!2sMIT%20AOE%20Rd%2C%20Kate%20Patil%20Nagar%2C%20Alandi%2C%20Maharashtra%20412105!5e0!3m2!1sen!2sin!4v1710407784747!5m2!1sen!2sin"
        width="600"
        height="500"
        allowfullscreen=""
        loading="lazy"
        className="w-full"
      ></iframe>
      <Footer />
    </div>
  );
};

export default MainApp;
