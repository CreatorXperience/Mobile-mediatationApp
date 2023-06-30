import React, { createContext, useState } from "react";
import Splash from "./pages/splashscreen";
import { Route, Routes } from "react-router";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import { Tcontext } from "./type";
import Play from "./pages/play";
import useSound from "use-sound";
// @ts-ignore
import Music from "./music/audi.mp3";
import { useEffect } from "react";
import useFetch from "./hooks/Fetch";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import FetchWithQuery from "./pages/Query";
import Sample from "./components/Sample";

export const Repository = createContext<Tcontext | null>(null);

const Client = new QueryClient();
const App = () => {
  const [play, { pause, stop, duration }] = useSound(Music);
  const [isPlaying, setisPlaying] = useState(false);

  const { Refetch, state } = useFetch();

  const value = () => {
    return {
      Item: state.fetchedResources,
      Refetch: Refetch,
      play,
      pause,
      stop,
      isPlaying,
      setisPlaying,
    };
  };

  useEffect(() => {
    setTimeout(() => Refetch("calm"), 2000);
  }, []);

  return (
    <QueryClientProvider client={Client}>
      <div className="App">
        <Repository.Provider value={value()}>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={<Home data={state} Refetch={Refetch} />}
            />
            <Route path="/play/:term/:id" element={<Play />} />
            <Route path="/query" element={<FetchWithQuery />} />
            <Route path="/sample" element={<Sample />} />
          </Routes>
        </Repository.Provider>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};
export default App;
