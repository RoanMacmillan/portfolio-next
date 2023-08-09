import React, { useEffect } from "react";

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
      className={`fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-customBlack
      
      ${isLoading ? "fadeIn" : "fadeOut pointer-events-none"}
      
      `}
    >
      <div className={`loadingTitle text-[80px] font-light text-white`}>
        Loading...
      </div>

      {isLoading && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-customEmerald animate-loading-bar"></div>
      )}

    </div>
  );
};

export default LoadingModal;
