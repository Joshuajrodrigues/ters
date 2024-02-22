import React, { ReactNode } from "react";
import BackButton from "./backButton";
import Title from "./title";

const PrayersLayout = ({
  children,
  title,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <section className=" space-y-8">
      <BackButton />

      <Title text={title} />

      {children}
    </section>
  );
};

export default PrayersLayout;
