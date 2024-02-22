import BackButton from "../components/backButton";

import data from '@/app/data/rosary.json'
import { GuttLayout } from "../components/guttLayout";
import { getDay, mapDayToKonkani, toNormalCase } from "../util";


export default async function AllRosaries() {

  return (
    <>
      <BackButton />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {
        data.map((item)=>(
          <>
            <GuttLayout 
            day={
              <>
                 Dis: {toNormalCase(item.day.join(",")) }
              </>
            }
            gutt={item}/>
          </>
        ))
      }
    </>
  );
}
