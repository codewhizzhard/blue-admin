import React, { useState } from "react";
import "./Login.css";
import Mobile from "./Mobile";
import Desktop from "./Destop";

const Login = () => {
  return (
    <div>
      <div className="md:hidden">
        <Mobile />
      </div>
      <div className="hidden md:block">
        <Desktop />
      </div>
    </div>
  );
};

export default Login;
