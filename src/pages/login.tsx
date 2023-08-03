import React from "react";

import Header from "../components/header";
import Form from "../components/form";

export default class Login extends React.Component {
  render() {
    return (
      <div className="w-[100%]  bg-[#253334]">
        <Header
          content="Sign In"
          desc="  Sign in now to acces your excercises and saved music."
        />
        <Form
          buttonContent="LOGIN"
          isNameVisible={false}
          accountType="Sign Up"
        />
        {/* <div className="relative bottom-20 z-0"> {svg.flower()}</div> */}
      </div>
    );
  }
}
