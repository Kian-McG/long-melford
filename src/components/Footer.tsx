import { FacebookIcon, TwitterIcon } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white py-4 h-[40vh]">
      <div className="container mx-auto text-center flex h-full">
        <div className="flex flex-col justify-between">
          <h3 className="font-bold">Contact Us</h3>
          <p>Email: info@mywebsite.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, Anytown, USA</p>
          <TwitterIcon />
          <div>
            <p>
              &copy; {new Date().getFullYear()} My Website. All rights reserved.
            </p>
            <p>Built by Onsite IT and Flero</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
