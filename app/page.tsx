import Image from "next/image";
import heroImage from '@/public/hero.jpg'
import { getDay, getRosaries } from "./util";
import { TodaysMystery } from "./components/todaysMystery";
import RosaryData from "./types";

async function getData() {
  const data = await getRosaries()

  return data[0]
}
export default async function Home() {
  const data:RosaryData = await getData()
  
  const day = getDay()
 
  const todaysGutt = data.rosary.filter((item)=>item.day.includes(day.toLowerCase()))
   
  return (
    <main className=" min-h-screen flex-col ">
      <header>
        <h1 className="text-8xl my-8">Ters </h1>
       
      </header>
      <section className="w-full p-0">
        <a href="">How to</a>
        <Image src={heroImage} className="w-full h-52" alt="Rosary" />
        <nav>
          <ul className="flex">
          <li className="m-2 underline">
              <a href="">All mysteries</a>
            </li>
          <li className="m-2 underline">
              <a href="">Ladin</a>
            </li>
            <li className="m-2 underline">
              <a href="">Other Konkani Prayers</a>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <TodaysMystery gutt={todaysGutt} />
      </section>
      <footer>
        <h3 className="mt-8 text-2xl ">
          <a className="underline" href="">
          Ladin
            
          </a>
        </h3>
      </footer>
    </main>
  );
}
