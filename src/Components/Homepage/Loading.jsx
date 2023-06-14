import React from "react";

import { loader } from "../../assets";
import "./Loading.css";
const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
