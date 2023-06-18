import axios from "axios";
import { useState } from "react";
import { Tforplay } from "../type";
const useFetchSingleItem = () => {
  const [music, setMusic] = useState<Tforplay | null>(null);

  const fetchMusic = async (term: string, id: string) => {
    try {
      let response = await axios.get(`http://localhost:8080/${term}/${id}`);
      let data = response.data;
      setMusic(data);
    } catch (e) {
      return "an error has occured";
    }
  };

  return { music, fetchMusic };
};

export default useFetchSingleItem;
