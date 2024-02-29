import React from "react";
import FullDivide from "./fullDivide";

const Title = ({ text }: { text: string }) => {
  return (
    <>
      <FullDivide />
      <h2 className=" text-3xl mt-8 font-extrabold">{text}</h2>
      <FullDivide />
    </>
  );
};

export default Title;
