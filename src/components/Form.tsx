import React, { useState } from "react";
import { motion } from "framer-motion";


const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can perform form submission or data handling here with formData state.
    console.log("Form data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 customMd:mt-0 customMd:w-1/2 customMd:ml-0">

<motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: -20 }}
        transition={{ duration: 0.8 }}
      >

<div className="flex justify-between">

      <div className="flex flex-col w-[45%]">
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
          className="border-b-2 border-customBlack py-4 outline-none mt-1 text-sm"
        />
      </div>

      <div className="flex flex-col w-[45%]">
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
className="border-b-2 border-customBlack py-4 outline-none mt-1 text-sm"
        />
      </div>

      </div>

      <div className="flex flex-col mt-6 customMd:mt-12">
        <label className="text-base font-bold" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How Can I help?"
          className="border-b-2  border-customBlack pt-6 pb-12 customMd:pb-24 outline-none text-sm"
        />
      </div>

      <button disabled className="mt-8 bg-customBlack w-[150px] h-[45px] hover:bg-customWhite hover:text-customBlack border-customBlack border-[2px] transition-all duration-300 text-customWhite font-semibold customMd:mt-16" type="submit">Send Now</button>
    
    </motion.div>
    
    </form>
  );
};

export default Form;
