"use client";
import rosaries from "@/app/data/rosary.json";
import { useEffect, useState } from "react";
import { RosaryOfTheDay } from "../types";
import { getDay, mapDayToKonkani } from "../util";
import { GuttLayout } from "./guttLayout";

export const TodaysMystery = () => {
  const [todaysGut, setTodatsGut] = useState<RosaryOfTheDay>();

  useEffect(() => {
    const day = getDay();
    const data = rosaries.filter((item) =>
      item.day.includes(day.toLowerCase())
    )[0];
    setTodatsGut(data);
  }, []);

  return (
    <>
      <GuttLayout day={
        <>
           Dis: {mapDayToKonkani[getDay().toLowerCase()]} /{" "}
           <small> {getDay()}</small>
        </>
      } gutt={todaysGut} />
    </>
  );
};
