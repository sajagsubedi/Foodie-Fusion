import React from "react";
import loadingGif from "./loading.gif";
import Image from "next/image";
const Spinner = () => {
  return (
    <div className="spinner">
      <Image src={loadingGif} alt="loading" height={50} width={50} />
    </div>
  );
};

export default Spinner;
