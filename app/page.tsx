

import { TodaysMystery } from "./components/todaysMystery";
import  { Rosaries } from "./types";


export default async function Home() {

  
  return (
    <main className=" min-h-screen flex-col ">
      <section>
        <TodaysMystery/>
      </section>

    </main>
  );
}
