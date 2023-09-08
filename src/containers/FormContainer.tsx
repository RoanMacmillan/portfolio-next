import React from "react";
import Form from "@/components/Form";
import ContactFlex from "@/components/ContactFlex";

const FormContainer = () => {
  return (
    <div className="mx-auto mt-[50px] max-w-[1280px] customMd:mt-[100px]">
      <h1 className="mt-12 text-[60px] font-light leading-[1] tracking-[-2px] lg:mt-20 lg:text-[80px]">
        Let's<br className="lg:hidden"></br>
        <span className="font-bold lg:ml-[10px]">Talk</span>
      </h1>
      <div className="mt-6 h-[5px] w-14 bg-customBlack"></div>

      <div className="mt-16 justify-between customMd:flex lg:mt-16">
        <div className="customMd:w-[40%]">
          <h2 className="text-2xl font-bold">Contact form</h2>
          <p className="mt-4 text-[15px] text-customGray">
            Got a project in mind? Find my contact info below or feel free to
            fill out the form below with your questions.
          </p>
        </div>

        <Form />
      </div>

      <ContactFlex />

      <div className="mt-[60px] block h-[1px] w-full bg-gray-200 sm:hidden"></div>
    </div>
  );
};

export default FormContainer;
