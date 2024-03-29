import React from "react";

const NotFound: React.FC<{ type: string }> = ({ type }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#f0f0f0]">
      <div className="text-center p-10 rounded-md">
        <h1 className="text-3xl text-[#ff5757] mb-5 capitalize">
          Oops! {type} Not Found
        </h1>
        <p className="mb-3 text-[#333]">
          It seems like the {type} you&apos;re looking for doesn&apos;t exist.
        </p>
        <p className="mb-3 text-[#333]">
          Please check the link or explore our other amazing properties.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
