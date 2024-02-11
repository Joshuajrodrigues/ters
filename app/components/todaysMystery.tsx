import { RosaryOfTheDay } from "../types"

import { getDay, mapDayToKonkani } from "../util"




export const TodaysMystery=({gutt}:{gutt:RosaryOfTheDay[]})=>{
    let data = gutt[0]
    return(
        <>
        <h2 className=" text-3xl mt-8">Aicho gutt : {data.title}</h2>
        <h3 className="mt-8 text-2xl ">Dis: {mapDayToKonkani[getDay().toLocaleLowerCase()]}</h3>
        {
            data.mysteries.map((item,index)=>(
                <h4 key={item.title} className="text-3xl my-8">
                    {`${index+1}] ${item.title}`}
                </h4>
            ))
        }
       
        </>
    )
}

