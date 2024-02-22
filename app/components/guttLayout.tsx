import { ReactNode } from "react";
import { RosaryOfTheDay } from "../types";
import { getDay, mapDayToKonkani } from "../util";

export const GuttLayout = ({ gutt,day }: { gutt?: RosaryOfTheDay,day:ReactNode }) => {
  return (
    <>
      <div className=" bg-orange-600  h-2 my-8"></div>
      <h2 className=" text-3xl mt-8">Aicho gutt: {gutt?.title}</h2>
      <div className=" bg-orange-600 h-2 my-8"></div>
      <h3 className="mt-8 text-2xl ">
          {day}
      </h3>
      {gutt?.mysteries.map((item, index) => (
        <div key={item.title}>
          <h4 key={item.title} className="text-3xl my-8">
            {`${index + 1}] ${item.title}`}
          </h4>
          <div className=" bg-orange-600  h-2 my-8 w-1/2"></div>
        </div>
      ))}
    </>
  );
};
