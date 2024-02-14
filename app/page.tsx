
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
