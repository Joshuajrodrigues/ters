"use client"
import { useEffect, useState } from "react";
import { getDay, mapDayToKonkani } from "../util";
import rosaries from '@/app/data/rosary.json'
import { RosaryOfTheDay } from "../types";

export const TodaysMystery = () => {
  const [todaysGut,setTodatsGut] = useState<RosaryOfTheDay>()
  
  useEffect(()=>{
    const day = getDay()
    const data = rosaries.filter((item)=>item.day.includes(day.toLowerCase()))[0]
    setTodatsGut(data)
  },[])
  
  

  
  return (
    <>
      <div className=" bg-orange-600  h-2 my-8"></div>
      <h2 className=" text-3xl mt-8">Aicho gutt: {todaysGut?.title}</h2>
      <div className=" bg-orange-600 h-2 my-8"></div>
      <h3 className="mt-8 text-2xl ">
        Dis: {mapDayToKonkani[getDay().toLowerCase()]} /{" "}
        <small> {getDay()}</small>
      </h3>
      {todaysGut?.mysteries.map((item, index) => (
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
