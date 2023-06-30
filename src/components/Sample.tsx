import axios from "axios";
import { useEffect, useState } from "react";
import { TData } from "../type";

const Sample = () => {
  const [data, setData] = useState<TData[] | null>();

  const fetch = async () => {
    try {
      const response = await axios.get("http://localhost:8080/calm1");
      setData(response.data);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="text-white text-lg font-2xl font-bold">
      {" "}
      Music
      <div>Music</div>
      <ul>
        {data?.map((content: TData) => {
          return <li> {content.title}</li>;
        })}
      </ul>
      ;
    </div>
  );
};

export default Sample;
