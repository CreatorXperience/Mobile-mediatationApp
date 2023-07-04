import { useQuery } from "react-query";
import { Component } from "react";
import axios from "axios";
import { Tdata } from "../type";

class FetchQuery extends Component {
  FetchData: {}[];
  constructor(FetchData: {}[]) {
    super(FetchData);
    this.FetchData = FetchData;
  }

  handleFetch = async () => {
    let { data } = await axios.get<Tdata[]>(`http://localhost:8080/relax`);
    this.FetchData = data;
    return data;
  };
}
export default FetchQuery;
