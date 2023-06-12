import React, { createContext, useCallback } from "react";
import Splash from "./pages/splashscreen";
import { Route, Routes } from "react-router";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import { forHomeState } from "./type";
import { HandleFetch } from "./services/product";
import { forContext } from "./type";

export const Repository = createContext<forContext | null>(null);
export default class App extends React.Component {
  state: forHomeState = {
    fetchedResources: '',
    isNavigationBarOpen: false,
  };

  value = () => {
    return { Item: this.state.fetchedResources, Refetch: this.handleFetch };
  };

  handleFetch = async (term: string, e?: React.MouseEvent<HTMLDivElement>) => {
      e?.stopPropagation();
      let response = await  HandleFetch(term);
      if (typeof response !== "string") {
        this.setState({ fetchedResources: response });
      }
    }
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
            <Route path="/home" element={<Home data ={this.state} Refetch={this.handleFetch}/>} />
          </Routes>
        </Repository.Provider>
      </div>
    );
  }
}
