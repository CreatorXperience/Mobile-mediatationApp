import { HandleFetch } from "../services/product";
import { useState } from "react";
import { Thome } from "../type";

const useFetch = () => {
  const [content, setContent] = useState<Thome>({
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
      setContent({
        fetchedResources: response,
        isNavigationBarOpen: false,
      });
    }
  };

  return { content, Refetch };
};

export default useFetch;
