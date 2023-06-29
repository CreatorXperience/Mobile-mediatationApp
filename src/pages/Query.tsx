import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

type Terror = {
  message: string;
};
type Tdata = {
  id: string;
  title: string;
  desc: string;
  image: string;
  music: string;
  cat: string;
};
const fetchQuery = async () => {
  let { data } = await axios.get<Tdata[]>(`http://localhost:8080/relax`);
  return data;
};

type TUser<T> = {
  data: T;
  name: T;
  age: string;
};

// TODO: implement typescript type checking with generic
// FIXME: make state use generic type checking
const FetchWithQuery = () => {
  // const [state, setState] = useState<TUser>();
  const onSuccess = (data: any) => {
    if (data.length === 4) {
      return false;
    }
    console.log("Invoked immediately after successful fetch", data);
    return true;
  };

  const onError = (error: any) => {
    console.log("Invoked immediately after error", error);
  };

  const { data, isLoading, isError, error, isFetching, refetch } = useQuery<
    Tdata[],
    Terror
  >("dataFetch", fetchQuery, {
    // refetchOnMount: false,
    // refetchOnWindowFocus: true,
    // refetchInterval: 3000,
    // refetchIntervalInBackground: true,
    // refetchInterval: 5000,
    // onSuccess,
    // onError,
    // enabled: false,
    // staleTime: 10000,
    // cacheTime: 10000,
  });

  if (isError) {
    return (
      <h1 className="text-white font-2xl font-medium">
        Error : {error.message}(
      </h1>
    );
  }

  if (isLoading || isFetching) {
    return <h1 className="text-white font-2xl font-medium">Loading...</h1>;
  }

  return (
    <>
      <div>
        <h2 className="text-white font-2xl font-medium"> Query Data </h2>
        <button onClick={() => refetch()}>refetch</button>
        <h1 className="text-white font-2xl font-bold">
          {" "}
          <Link to="/"> Home </Link>
        </h1>
        {data?.map((data) => {
          return (
            <>
              <p className="text-white text-md font-medium" key={data.title}>
                {data.music}
              </p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default FetchWithQuery;
