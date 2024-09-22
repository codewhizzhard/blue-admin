import React, { useState } from "react";
import "./Login.css";
import Mobile from "./Mobile";
import Destop from "./Destop";

const Login = () => {
  return (
    <div>
      <div className="md:hidden">
        <Mobile />
      </div>
      <div className="hidden md:block">
        <Destop />
      </div>
    </div>
  );
};

export default Login;
