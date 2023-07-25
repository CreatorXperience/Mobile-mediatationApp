import React from "react";
import Top from "../components/Top";
import svg from "../svgs/svg";
import Card from "../components/card";
import Footer from "../components/footer";
import { TdataX, Tproduct } from "../type";

export default class Home extends React.Component<Tproduct> {
  renderData = () => {
    let { data } = this.props;
    if (typeof data.fetchedResources !== "string") {
      let DisplayData = this.validData(data.fetchedResources);
      return DisplayData;
    } else {
      return <Card />;
    }
  };

  validData = (data: TdataX) => {
    let mappedData = data.map((datas, index) => {
      return <Card key={datas.id} Datas={datas} index={index} />;
    });

    return mappedData;
  };
  render() {
    return (
      <div className="container w-[100%]  bg-[#253334]  relative">
        <Top />

        <div
          className="absolute w-[100%]  top-[9rem]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className=" text-white  text-3xl pl-6"> Welcome back, Dude!</div>
          <div className="mx-6 text-gray-400 text-xl py-2">
            How are you feeling today ?
          </div>

          <div className="container w-[100%]  flex justify-around mt-4">
            <div
              className="w-[18%]"
              onClick={(e) => this.props.Refetch("calm", e)}
            >
              <div className="w-[100%] rounded-3xl bg-gray-100 py-4 flex justify-center">
                {svg.calm()}
              </div>
              <div className="text-white text-sm  w-[100%] text-center">
                Calm
              </div>
            </div>

            <div className="w-[18%]">
              <div
                className="w-[100%] rounded-3xl bg-gray-100 py-4 flex justify-center"
                onClick={() => this.props.Refetch("relax")}
              >
                {svg.relax()}
              </div>
              <div className="text-white text-sm  w-[100%] text-center">
                Relax
              </div>
            </div>

            <div className="w-[18%]">
              <div
                className="w-[100%] rounded-3xl bg-gray-100 py-4 flex justify-center"
                onClick={() => this.props.Refetch("focus")}
              >
                {svg.focus()}
              </div>
              <div className="text-white text-sm  w-[100%] text-center">
                Focus
              </div>
            </div>

            <div className="w-[18%]">
              <div
                className="w-[100%] rounded-3xl bg-gray-100 py-4 flex justify-center"
                onClick={() => this.props.Refetch("anxious")}
              >
                {svg.relax()}
              </div>
              <div className="text-white text-sm w-[100%] text-center">
                Anxious
              </div>
            </div>
          </div>

          <div className="mb-20">{this.renderData()}</div>
        </div>

        <Footer playIcon={true} musicIcon={false} profileIcon={false} />
      </div>
    );
  }
}
