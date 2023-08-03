import React from "react";
import { Link } from "react-router-dom";
import { TLogin } from "../type";
import { TFormProps } from "../type";

export default class Form extends React.Component<TFormProps> {
  state: TLogin = {
    password: "",
    email: "",
    isValidated: false,
    passwordError: false,
    canLogIn: null,
    storeName: "",
  };

  handleLogin = () => {
    if (this.state.password !== "" && this.state.email !== "") {
      this.setState({ canLogIn: true });
    } else if (this.state.password !== "" && this.state.email === "") {
      this.setState({ canLogIn: false });
    } else if (this.state.password === "" && this.state.email !== "")
      this.setState({ canLogIn: false });
  };

  validateInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      let regExp = /^.+@.+com$/;

      if (regExp.exec(e.target.value) || e.target.value === "") {
        this.setState({ email: e.currentTarget.value, isValidated: false });
      } else {
        this.setState({ isValidated: true });
      }
    } else {
      let passwordRegExp = /^[\d+A-Za-z]+[#$%!@^&*()_+-=";|]+$/;
      if (passwordRegExp.exec(e.target.value) || e.target.value === "") {
        console.log(passwordRegExp.exec(e.target.value));
        this.setState({
          password: e.currentTarget.value,
          passwordError: false,
          canLogIn: true,
        });
      } else {
        this.setState({
          passwordError: true,
        });
      }
    }
  };
  render() {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        {this.props.isNameVisible ? (
          <input
            name="text"
            type="email"
            className="border-b-2 border-b-zinc-400 outline-0  text-md text-white bg-[#253334] w-[90%] mx-4 mb-4 mt-8"
            placeholder="Name"
            onChange={(e) => this.setState({ storeName: e.target.value })}
            required
          />
        ) : (
          ""
        )}

        <input
          name="email"
          type="email"
          className="border-b-2 border-b-zinc-400 outline-0  text-md text-white bg-[#253334] w-[90%] mx-4 mb-4 mt-8"
          placeholder="Email Address"
          onChange={(e) => this.validateInfo(e)}
          required
        />
        {this.state.isValidated ? (
          <div className="text-emerald-200 mx-4"> Email address not valid </div>
        ) : (
          ""
        )}

        <input
          name="password"
          type="password"
          className="border-b-2 border-b-zinc-400 outline-0  text-md text-white bg-[#253334] w-[90%] mx-4 mt-8 mb-2"
          placeholder="Password"
          onChange={(e) => this.validateInfo(e)}
        />
        {this.state.passwordError ? (
          <div className="text-emerald-200 mx-4">
            A number or a symbol must be included{" "}
          </div>
        ) : (
          ""
        )}
        <div className="text-end mx-4 text-gray-400 text-sm">
          Forgot Password?
        </div>

        <Link to={this.state.canLogIn ? "/home" : ""}>
          {" "}
          <button
            className="w-[90%] bg-[#7C9A92] py-4 mx-4 mt-8 rounded-lg text-white text-2xl relative bottom-0  z-10"
            onClick={this.handleLogin}
          >
            {" "}
            {this.props.buttonContent}{" "}
          </button>{" "}
        </Link>
        <Link
          className="text-center mt-4 z-10 relative  text-gray-400"
          to={this.props.accountType === "Sign Up" ? "/signup" : "/login"}
        >
          {" "}
          <div>
            Don’t have an account?{" "}
            <span className="text-gray-100 font-medium">
              {" "}
              {this.props.accountType}{" "}
            </span>{" "}
          </div>
        </Link>
      </form>
    );
  }
}
