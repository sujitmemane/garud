import React from "react";
import Logo from "../assets/logo.png";
export function Footer() {
  return (
    <section className="relative overflow-hidden bg-gray-100 py-8">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="">
            <a href="#">
              <div className="inline-flex items-center">
                <img src={Logo} className="h-12" alt="" />
              </div>
            </a>
          </div>
          <div className="w-auto p-8">
            <ul className="-m-5 flex flex-wrap items-center">
              <li className="p-5">
                <a
                  className="font-medium text-gray-900 hover:text-gray-700"
                  href="#"
                >
                  Help
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-gray-900 hover:text-gray-700"
                  href="#"
                >
                  FAQ
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-gray-900 hover:text-gray-700"
                  href="#"
                >
                  Custom Service
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-gray-900 hover:text-gray-700"
                  href="#"
                >
                  How to Use?
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-gray-900 hover:text-gray-700"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
