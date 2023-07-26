import React from "react";
import svg from "../svgs/svg";
import { Link } from "react-router-dom";
import { Tprops } from "../type";
const Card = ({ Datas, index }: Tprops) => {
  return (
    <div>
      {!Datas ? (
        <div className="w-[90%] animate-pulse h-[10rem] rounded-2xl flex bg-[white] mx-4  mt-4 py-4 px-4"></div>
      ) : (
        ""
      )}

      {!Datas ? (
        <div className="w-[90%] animate-pulse h-[10rem] rounded-2xl flex bg-[white] mx-4  mt-4 py-4 px-4"></div>
      ) : (
        ""
      )}

      {!Datas ? (
        <div className="w-[90%] animate-pulse h-[10rem] rounded-2xl flex bg-[white] mx-4  mt-4 py-4 px-4"></div>
      ) : (
        ""
      )}

      {Datas ? (
        <div className="w-[90%] rounded-2xl flex h-[140px] bg-[#F7F3F0] mx-4  mt-4 py-2 px-4">
          <div className="w-[90%]">
            <div className="text-xl text-gray-700">{Datas?.title}</div>

            <div className="w-[80%] font-semibold text-sm">{Datas?.desc}</div>

            <Link to={`/play/${Datas.cat}/${Datas.id}`}>
              <button className="w-[50%] flex justify-center  bg-[#253334] text-white py-2 mt-2  my-2 rounded-md">
                Play Now <div className="mt-2 ml-2"> {svg.playIcon()}</div>
              </button>
            </Link>
          </div>
          <div className="w-[30%]">
            <img
              src={Datas?.image}
              alt="meditate"
              className="w-[100%] rounded-full mt-8"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
