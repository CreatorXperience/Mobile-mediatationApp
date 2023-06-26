import React, { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

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

const FetchWithQuery = () => {
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
    refetchInterval: () => (onSuccess(data) ? 3000 : false),
    onSuccess,
    onError,
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
        <button>refetch</button>
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
