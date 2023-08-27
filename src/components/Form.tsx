import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";


interface FormData {
  name: string;
  email: string;
  message: string;
}

const Form: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '', // Initialize with an empty string
    email: '',
    message: '',
  });


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


    const validateName = (name: string) => {
    if (name.trim() === "") {
      return "* Can't be blank";
    }
    return "";
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email.match(emailRegex)) {
      return "* Invalid Email";
    }
    return "";
  };


  const validateMessage = (message: string) => {
    if (message.trim() === "" || message.trim().length < 10) {
      return "* Please enter at least 10 characters";
    }
    return "";
  };
  

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    if (nameError || emailError || messageError) {
      setErrors({
        ...errors,
        name: nameError,
        email: emailError,
        message: messageError,
       
      });
      return;
    }


    setIsLoading(true);



    try {
      const response = await axios.post(
        "/.netlify/functions/sendEmail",
        formData
      );

      if (response.status === 200) {
        console.log("Email sent successfully");


        setFormData((prevFormData) => ({
          ...prevFormData,
          message: "",
        }));

        

        // Perform any other success actions here
      } else {
        console.error("Failed to send email");
        // Handle error scenario
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle error scenario
    } finally {


      setIsLoading(false);

      // setErrors({
      //   name: '', // Initialize with an empty string
      //   email: '',
      //   message: '',
      // })

    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 customMd:ml-0 customMd:mt-0 customMd:w-1/2"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-between">
          <div className="flex w-[45%] flex-col relative">
            <label className="text-base font-bold" htmlFor="name">
              Name
              
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="mt-1 border-b-2 border-customBlack py-4 text-sm outline-none"
            />

{errors.name && (
    <div className="text-red-500 text-xs top-[-25px] absolute">{errors.name}</div>
  )}

          </div>

          <div className="flex w-[45%] flex-col relative">
            <label className="text-base font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="mt-1 border-b-2 border-customBlack py-4 text-sm outline-none"
            />

{errors.email && (
    <div className="text-red-500 text-xs top-[-25px] absolute">{errors.email}</div>
  )}

          </div>
        </div>

        <div className="mt-6 flex flex-col customMd:mt-12 relative">
          <label className="text-base font-bold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How Can I help?"
            className="border-b-2  border-customBlack pb-12 pt-6 text-sm outline-none customMd:pb-24"
          />

{errors.message && (
    <div className="text-red-500 text-xs top-[-25px] absolute">{errors.message}</div>
  )}


        </div>

        <button
          className={` ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'} mt-8 h-[45px] w-[150px] border-[2px] border-customBlack bg-customBlack font-semibold text-customWhite transition-all duration-300 hover:bg-customWhite hover:text-customBlack customMd:mt-16`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Send Now'}
        </button>
      </motion.div>
    </form>
  );
};

export default Form;
