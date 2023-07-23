import { useQuery } from "react-query";
import axios from "axios";
import { Tdata } from "../type";
import { Link } from "react-router-dom";
const getData = async () => {
  let response = await axios.get<Tdata[]>("http://localhost:8080/calm");
  return response.data;
};
const Fetcher = () => {
  let { data, isLoading, isError, refetch } = useQuery("fetch-data", getData, {
    cacheTime: 4000,
    enabled: false,
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
      <button onClick={() => refetch()}>Fetch</button>
      <Link to="/query">Next page</Link>
      <ul>
        {data?.map((data: Tdata) => {
          return <li className="text-white text-2xl">{data.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Fetcher;
