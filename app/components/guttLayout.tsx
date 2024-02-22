import { ReactNode } from "react";
import { RosaryOfTheDay } from "../types";
import Paragraph from "./paragraph";
import Title from "./title";

export const GuttLayout = ({
  gutt,
  day,
}: {
  gutt?: RosaryOfTheDay;
  day: ReactNode;
}) => {
  return (
    <>

      <Title text={`Aicho gutt: ${gutt?.title}`} />

      <h3 className="mt-8 text-2xl ">{day}</h3>
      {gutt?.mysteries.map((item, index) => (
        <div key={item.title}>
          <Paragraph key={item.title}>
            {`${index + 1}] ${item.title}`}
          </Paragraph>
          {index !== 4 && (
            <div className=" bg-orange-600  h-1 my-8 w-1/2"></div>
          )}
        </div>
      ))}
    </>
  );
};
