import React, { createContext } from "react";
import Splash from "./pages/splashscreen";
import { Route, Routes } from "react-router";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import { Thome } from "./type";
import { HandleFetch } from "./services/product";
import { forContext } from "./type";
import Play from "./pages/play";

export const Repository = createContext<forContext | null>(null);
export default class App extends React.Component {
  state: Thome = {
    fetchedResources: "",
    isNavigationBarOpen: false,
    currentlyPlaying: (music: string) => [music],
  };

  value = () => {
    return {
      Item: this.state.fetchedResources,
      Refetch: this.handleFetch,
      playNow: this.state.currentlyPlaying,
    };
  };

  handleFetch = async (term: string, e?: React.MouseEvent<HTMLDivElement>) => {
    e?.stopPropagation();
    let response = await HandleFetch(term);
    if (typeof response !== "string") {
      this.setState({ fetchedResources: response });
    }
  };

  componentDidMount() {
    setTimeout(() => this.handleFetch("calm"), 5000);
  }

  render() {
    return (
      <div className="App">
        <Repository.Provider value={this.value()}>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={<Home data={this.state} Refetch={this.handleFetch} />}
            />
            <Route path="/play/:term/:id" element={<Play />} />
          </Routes>
        </Repository.Provider>
      </div>
    );
  }
}
