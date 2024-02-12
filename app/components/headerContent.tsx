"use client";
import Image from "next/image";
import heroImage from "@/public/hero.jpg";
import Link from "next/link";
import { QuickLinks } from "./quickLinks";

export const HeaderContent = () => {
  return (
    <>
      <header>
        <h1 className="text-8xl my-8">Ters </h1>
      </header>
      <section className="w-full p-0">
        <nav>
          <ul className="flex  p-0 mx-0 justify-between items-center">
            <li className="my-2 underline">
              <a href="">Sotmanta</a>
            </li>
            <li className="my-2 underline">
              <a href="">Amchea bapa</a>
            </li>
            <li className="my-2 underline">
              <a href="">Noman rani</a>
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
              <QuickLinks route="/allmysteries">All mysteries</QuickLinks>
            </li>
            <li className="my-2 underline">
              <a href="">Ladin</a>
            </li>
            <li className="my-2 underline">
              <a href="">Other Konkani Prayers</a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};
