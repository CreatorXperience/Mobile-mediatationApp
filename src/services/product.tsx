import axios from "axios";
import { useQuery } from "react-query";
export async function HandleFetch(term: string) {
  try {
    let response = await axios.get(`http://localhost:8080/${term}`);
    let data = response.data;
    return data;
  } catch (e) {
    return "an error has occured";
  }
}
