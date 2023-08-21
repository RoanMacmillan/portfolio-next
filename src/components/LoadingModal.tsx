import React, { useEffect } from "react";
import LoadingBar from "./LoadingBar";


const LoadingModal = ({ isLoading }: { isLoading: boolean }) => {
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open"); 
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isLoading]);

  return (
    <div
      className={`fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center  bg-customBlack
      
      ${isLoading ? "fadeIn" : "fadeOut pointer-events-none"}
      
      `}
    >
      <div className={`loadingTitle text-[50px] customMd:text-[80px] font-light text-white`}>
        Loading...
      </div>


<LoadingBar backgroundColorClass="bg-customEmerald" />




    </div>
  );
};

export default LoadingModal;
