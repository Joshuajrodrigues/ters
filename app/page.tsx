

import { TodaysMystery } from "./components/todaysMystery";
import  { Rosaries } from "./types";


export default async function Home() {

  
  return (
    <main className=" min-h-screen flex-col ">
      <section>
        <TodaysMystery/>
      </section>
      <footer>
     
          <a className="underline mt-8 text-2xl " href="">
          Ladin
            
          </a>
       
      </footer>
    </main>
  );
}
