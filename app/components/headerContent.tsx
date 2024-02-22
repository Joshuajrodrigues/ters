"use client";
import Image from "next/image";
import heroImage from "@/public/hero.jpg";
import Link from "next/link";
import { QuickLinks } from "./quickLinks";

export const HeaderContent = () => {
  return (
    <>
      <header>
        <h1 className="text-8xl my-8">
          <QuickLinks route="/">Holy Ters</QuickLinks>
           
          </h1>
      </header>
      <section className="w-full p-0">
        <nav>
          <ul className="flex  p-0 mx-0 justify-between items-center">
            <li className="my-2 underline">
              <QuickLinks route="/prayers/sotmanta">Sotmanta</QuickLinks>
            </li>
            <li className="my-2 underline">
              <QuickLinks route="/prayers/amcheabapa">Amchea bapa</QuickLinks>
            </li>
            <li className="my-2 underline">
            <QuickLinks route="/prayers/nomanrani">Noman rani</QuickLinks>
        
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
              <QuickLinks route="/prayers/allmysteries">
                All mysteries
              </QuickLinks>
            </li>
            <li className="my-2 underline">
              <QuickLinks route="/prayers/ladin">Ladin</QuickLinks>
            </li>
            <li className="my-2 underline">
              <QuickLinks route="/prayers/"> All Prayers</QuickLinks>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};
