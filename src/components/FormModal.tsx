import React from "react";
import success from "../../public/assets/icons/check.svg";
import fail from "../../public/assets/icons/error.svg";
import Image from "next/image";


interface FormModalProps {
    closeModal: () => void;
    modalVisible: boolean;
    modalContent: string; // You can make this type more specific if needed
  }

  const FormModal: React.FC<FormModalProps> = ({
    closeModal,
    modalVisible,
    modalContent,
  }) => {
  console.log("Modal visible:", modalVisible); // Add this line
  const renderModalContent = () => {
    if (modalContent === "success") {
      return (
        <>
          <Image
            src={success}
            alt="Success"
            width={100}
            height={100}
            className="successIcon"
          />

          <h2 className="text-3xl font-bold">Success!</h2>
          <p className="text-center text-[15px] text-customGray">
            Thank you for reaching out. I will get back to you shortly.
          </p>
        </>
      );
    } else {
      return (
        <>
          <Image
            src={fail}
            alt="Error"
            width={100}
            height={100}
            className="errorIcon"
          />
          <h2 className="text-3xl font-bold">Error</h2>
          <p className="text-center text-[15px] text-customGray">
            There was an error sending your message. Please try again later.
          </p>
        </>
      );
    }
  };

  return (
    <div
      className={` formModal fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center  ${
        modalVisible ? "" : ""
      }`}
      onClick={closeModal}
    >
      <div
        className="flex w-[90%] max-w-sm flex-col items-center justify-center gap-6 rounded-md bg-customWhite p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {renderModalContent()}
        <button
          onClick={closeModal}
          className="h-[45px] w-[150px] border-[2px] border-customBlack bg-customBlack font-semibold text-customWhite transition-all duration-300 hover:bg-customWhite hover:text-customBlack"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default FormModal;
