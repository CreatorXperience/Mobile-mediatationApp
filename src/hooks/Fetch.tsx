import { HandleFetch } from "../services/product";
import { useState } from "react";
import { Thome } from "../type";

const useFetch = () => {
  const [state, setState] = useState<Thome>({
    fetchedResources: "",
    isNavigationBarOpen: false,
  });

  const Refetch = async (
    term: string,
    e?: React.MouseEvent<HTMLDivElement>
  ) => {
    e?.stopPropagation();
    let response = await HandleFetch(term);
    if (typeof response !== "string") {
      setState({
        fetchedResources: response,
        isNavigationBarOpen: false,
      });
    }
  };

  return { state, Refetch };
};

export default useFetch;
