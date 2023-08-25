import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Form: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    setIsLoading(true);



    try {
      const response = await axios.post(
        "/.netlify/functions/sendEmail",
        formData
      );

      if (response.status === 200) {
        console.log("Email sent successfully");
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
          <div className="flex w-[45%] flex-col">
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
          </div>

          <div className="flex w-[45%] flex-col">
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
          </div>
        </div>

        <div className="mt-6 flex flex-col customMd:mt-12">
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
