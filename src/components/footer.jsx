import { logoIcon } from "../assets";

const Footer = () => {
  return (
    <footer className="max-w-screen-2xl mx-auto md:px-20 px-5 pt-20 pb-10">
      <div className="flex flex-col gap-[56px] lg:flex-row lg:items-center">
        <div>
          <img src={logoIcon} />
        </div>
        <ul className="flex flex-col gap-8 lg:flex-row lg:ml-auto ">
          <li className="text-[#36485C] text-base font-inter ">
            <a href="#"> Features</a>
          </li>
          <li className="text-[#36485C] text-base font-inter ">
            <a href="#"> Pricing</a>
          </li>
          <li className="text-[#36485C] text-base font-inter ">
            <a href="#"> Enterprise </a>
          </li>
          <li className="text-[#36485C] text-base font-inter ">
            <a href="#"> Careers </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-[#5F7896] text-sm lg:text-base font-inter mt-10">
          © Copyright 2024. Your Site. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
