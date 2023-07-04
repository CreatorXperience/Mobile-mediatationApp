import { useQuery } from "react-query";
import axios from "axios";
import { Tdata } from "../type";
import { Link } from "react-router-dom";
const getData = async () => {
  let response = await axios.get<Tdata[]>("http://localhost:8080/calm1 ");
  return response.data;
};
const Fetcher = () => {
  let { data, isLoading, isError } = useQuery("fetch-data", getData, {
    cacheTime: 4000,
  });

  if (isLoading) {
    return (
      <div className="text-white text-2xl" role="loading">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-white text-2xl" role="error">
        Error fetching data....
      </div>
    );
  }

  return (
    <div>
      <Link to="/query">Next page</Link>
      {data?.map((data: Tdata) => {
        return <li className="text-white text-2xl">{data.title}</li>;
      })}
    </div>
  );
};

export default Fetcher;
