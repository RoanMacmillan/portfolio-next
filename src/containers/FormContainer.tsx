import React from "react";
import Form from "@/components/Form";
import Image from "next/image";
import mail from "../../public/assets/icons/icon-mail.svg";
import photo from "../../public/assets/images/photos/footer-hero.webp";

const FormContainer = () => {
  return (
    <div className="mx-auto mt-[50px] max-w-[1280px] customMd:mt-[100px]">
      <h1 className="mt-12 text-[60px] font-light leading-[1] tracking-[-2px] lg:mt-20 lg:text-[80px]">
        Let's<br className="lg:hidden"></br>
        <span className="font-bold lg:ml-[10px]">Talk</span>
      </h1>
      <div className="mt-6 h-[5px] w-14 bg-customBlack"></div>

      <div className="mt-12 customMd:flex lg:mt-16">
        <div className="customMd:w-[40%]">
          <h2 className="text-2xl font-bold">Contact form</h2>
          <p className="mt-4 text-customGray">
            Got a project in mind? Find my contact info below or feel free to
            fill out the form below with your questions.
          </p>
        </div>

        <Form />
      </div>

      <div className="mt-20 customMd:mt-32">
        <Image src={mail} alt={mail} width={48} height={48} />

        <h3 className="mt-6 text-lg font-bold">roanmacmillan@hotmail.com</h3>
        <p className="mt-2 text-customGray">
          Send me a message and I will reach out as soon as possible.
        </p>
      </div>
      <div className="mt-[60px] block h-[1px] w-full bg-gray-200 sm:hidden"></div>
    </div>
  );
};

export default FormContainer;
