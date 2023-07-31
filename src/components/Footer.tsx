import React from "react";

interface FooterProps {
  title: string;
  emphasizedText: string;
  footerLink: string;
}

const Footer = ({ title, emphasizedText, footerLink }: FooterProps) => {
  return (
    <footer className="relative mx-auto mt-[60px] max-w-[1280px] pb-6 sm:mt-[100px] lg:mt-[150px] customMd:pb-[50px]">
      <div className="mb-[100px] hidden h-[1px] w-full bg-gray-200 sm:block"></div>

      <h2 className="text-[60px] font-light leading-[1] tracking-[-2px] lg:text-[70px]">
        {title}
        <br className="lg:hidden"></br>
        <span className="font-bold lg:ml-[10px]">{emphasizedText}</span>
      </h2>

      <p className="mt-[30px] font-semibold">{footerLink}</p>
      <div className="mt-[5px] h-[2px] w-20 bg-gray-200"></div>

      <nav className="mt-[150px]">
        <div className="sm:flex sm:items-center sm:gap-2">
          <p className="text-sm text-customGray">Follow me</p>
          <div className="mt-6 flex flex-col text-xl font-medium text-customBlack sm:mt-0 sm:flex-row sm:gap-2 sm:text-sm">
            <a href="https://www.github.com/">Github</a>
            <a href="https://www.linkedin.com/">LinkedIn</a>
            <a href="https://twitter.com/">Twitter</a>
            <a href="https://www.frontendmentor.io/">Frontend Mentor</a>
          </div>
        </div>

        <p className="mt-6 text-sm text-customGray sm:mt-0">
          Skill Icons created by Freepik - Flaticon
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
