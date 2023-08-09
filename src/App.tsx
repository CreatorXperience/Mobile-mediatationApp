import React, { createContext, useCallback, useState } from "react";
import WelcomeScreen from "./pages/welcomeScreen";
import { Route, Routes } from "react-router";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import { TProfile, Tcontext } from "./type";
import Play from "./pages/play";
import useSound from "use-sound";
// @ts-ignore
import Music from "./music/audi.mp3";
import { useEffect } from "react";
import useFetch from "./hooks/Fetch";

import { GoogleOAuthProvider } from "@react-oauth/google";
import Spline3d from "./components/spline3d";

export const Repository = createContext<Tcontext | null>(null);

const App = () => {
  const [play, { pause, stop }] = useSound(Music);
  const [isPlaying, setisPlaying] = useState(false);
  const { Refetch, content } = useFetch();

  const [user, setUser] = useState<{
    access_token: string;
  } | null>(null);

  const [profile, setProfile] = useState<TProfile>({
    name: "",
    picture: "",
    email: "",
  });

  const value = () => {
    return {
      Item: content.fetchedResources,
      Refetch: Refetch,
      play,
      pause,
      stop,
      isPlaying,
      setisPlaying,
    };
  };

  const defaultFetch = useCallback(() => {
    return Refetch("calm");
  }, []);

  useEffect(() => {
    setTimeout(() => defaultFetch(), 1);
  }, []);

  return (
    <GoogleOAuthProvider clientId="639670905803-qd3r98a52i1sao9bu1s1m9mctfg2g4ut.apps.googleusercontent.com">
      <div className="App">
        <Repository.Provider value={value()}>
          <Routes>
            <Route
              path="/"
              element={
                <WelcomeScreen
                  user={user}
                  changeUser={setUser}
                  changeProfile={setProfile}
                  profile={profile}
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={<Home data={content} Refetch={Refetch} />}
            />
            <Route path="/play/:term/:id" element={<Play />} />

            <Route path="/spline" element={<Spline3d />} />
          </Routes>
        </Repository.Provider>
      </div>
    </GoogleOAuthProvider>
  );
};
export default App;
