import React, { useEffect } from "react";

const GoogleAuth = () => {
  useEffect(() => {
    // @ts-ignore
    // window.gapi.load("client:auth2", () => {
    //   // @ts-ignore
    //   window.gapi.client.init({
    //     clientId:
    //       "639670905803-qd3r98a52i1sao9bu1s1m9mctfg2g4ut.apps.googleusercontent.com",
    //     scope: "email",
    //   });
    // });
  }, []);
  return <div>AUth</div>;
};

export default GoogleAuth;
