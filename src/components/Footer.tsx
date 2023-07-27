import React from "react";

interface FooterProps {
  title: string;
  emphasizedText: string;
  footerLink: string;
}

const Footer = ({ title, emphasizedText, footerLink }: FooterProps) => {
  return (
    <footer className="relative mt-[60px] pb-6">
      <h2 className="text-[60px] font-light leading-[1] tracking-[-2px]">
        {title}
        <br></br> <span className="font-bold">{emphasizedText}</span>
      </h2>

      <p className="mt-[30px]">{footerLink}</p>
      <div className="mt-[5px] h-[2px] w-20 bg-gray-200"></div>

      <nav className="mt-[150px]">
        <p className="text-sm text-customGray">Follow me</p>
        <div className="mt-6 flex flex-col text-xl font-medium text-customBlack">
          <a href="https://www.github.com/">Github</a>
          <a href="https://www.linkedin.com/">LinkedIn</a>
          <a href="https://twitter.com/">Twitter</a>
          <a href="https://www.frontendmentor.io/">Frontend Mentor</a>
        </div>
        <p className="mt-6 text-sm text-customGray">
          Skill Icons created by Freepik - Flaticon
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
