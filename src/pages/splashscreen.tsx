import React, { useEffect } from "react";
import ".././style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
// @ts-ignore
import logo from "../images/meditate.png";

type TProps = {
  user: {
    access_token: string;
  } | null;
  changeProfile: (arg: any) => void;
  profile: {
    email: string;
  };
  changeUser: (
    user: Omit<TokenResponse, "error" | "error_description" | "error_uri">
  ) => void;
};
const Splash = ({ user, profile, changeProfile, changeUser }: TProps) => {
  let navigate = useNavigate();

  useEffect(() => {
    let Token = localStorage.getItem("token");
    if (Token) {
      navigate("/home");
    }
  });

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      navigate("/home");
      changeUser(codeResponse);
      console.log(profile.email);
    },
    onError: (error) => {
      console.log(error);
      navigate("/login");
    },
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          changeProfile(res.data);
          console.log("success");
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className="w-[100%] h-[100vh] border-x-2 border-red-600 ">
      <div className="container w-[100%] flex flex-col" id="home">
        <div className="border-red-600 w-[100%] flex justify-center border-x-2 border-y-2">
          <img src={logo} className="w-[60%] xl:w-[20%]" />
        </div>

        <div className="text-gray-100 text-3xl font-semibold  border-x-2 border-y-2 border-red-600 text-center w-[100%]">
          WELCOME
        </div>
        <div className="text-gray-100 text-xl text-center  border-x-2 border-y-2 border-red-600 font-light w-[100%]">
          Do meditation. Stay focused. Live a healthy life.
        </div>

        <div className="w-[100%] flex justify-center">
          <Link
            to="/login"
            className="w-[90%] mt-4 py-4 text-center  bg-[#7C9A92]  text-gray-100 text-2xl rounded-xl"
          >
            <button> Join us </button>
          </Link>
        </div>
        <div className="auth-button mt-4 w-[100%] flex justify-center">
          <button
            className="w-[60%] py-4 rounded-xl text-center text-xl bg-white"
            onClick={() => login()}
          >
            Login with Google
          </button>
        </div>
        <div className="text-center w-[100%] mt-2 text-gray-400">
          Don’t have an account?
          <Link to="/signup">
            <span className="text-gray-100 font-medium"> Sign Up </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Splash;
