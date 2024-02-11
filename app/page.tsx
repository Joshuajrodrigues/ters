import Image from "next/image";
import heroImage from '@/public/hero.jpg'
import { getDay, getRosaries } from "./util";
import { TodaysMystery } from "./components/todaysMystery";
import  { Rosaries } from "./types";

async function getData() {
  const data = await getRosaries()

  return data
}
export default async function Home() {
  const data:Rosaries = await getData()
  
  const day = getDay()
 
  const todaysGutt = data.filter((item)=>item.day.includes(day.toLowerCase()))
   
  return (
    <main className=" min-h-screen flex-col ">
      <header>
        <h1 className="text-8xl my-8">Ters </h1>
       
      </header>
      <section className="w-full p-0">
        
        <Image src={heroImage} className="w-full h-52" alt="Rosary" />
        <nav>
          <ul className="flex mb-8 p-0 mx-0 justify-between items-center">
          <li className="my-2 underline">
              <a href="">All mysteries</a>
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
      <section>
        <TodaysMystery gutt={todaysGutt} />
      </section>
      <footer>
     
          <a className="underline mt-8 text-2xl " href="">
          Ladin
            
          </a>
       
      </footer>
    </main>
  );
}
