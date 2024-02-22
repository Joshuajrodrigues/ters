"use client";
import Image from "next/image";
import heroImage from "@/public/hero.jpg";
import Link from "next/link";
import { QuickLinks } from "./quickLinks";
import { appRoutes } from "../util/routes";

export const HeaderContent = () => {
  return (
    <>
      <header>
        <h1 className="text-8xl my-8">
          <QuickLinks route={appRoutes.home}>Holy Ters</QuickLinks>
           
          </h1>
      </header>
      <section className="w-full p-0">
        <nav>
          <ul className="flex  p-0 mx-0 justify-between items-center">
            <li className="my-2 underline">
              <QuickLinks route={appRoutes.sotmanta}>Sotmanta</QuickLinks>
            </li>
            <li className="my-2 underline">
              <QuickLinks route={appRoutes.amchabapa}>Amchea bapa</QuickLinks>
            </li>
            <li className="my-2 underline">
            <QuickLinks route={appRoutes.nomanrani}>Noman rani</QuickLinks>
        
            </li>
          </ul>
        </nav>
        <Image
          placeholder="blur"
          src={heroImage}
          className="w-full h-52"
          alt="Rosary"
        />
        <nav>
          <ul className="flex mb-8 p-0 mx-0 justify-between items-center">
            <li className="my-2 underline">
              <QuickLinks route={appRoutes.allmysteries}>
                All mysteries
              </QuickLinks>
            </li>
            <li className="my-2 underline">
              <QuickLinks route={appRoutes.ladin}>Ladin</QuickLinks>
            </li>
            <li className="my-2 underline">
              <QuickLinks route={appRoutes.prayers}> All Prayers</QuickLinks>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};
