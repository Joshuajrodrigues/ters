import RosaryData, { RosaryDay } from "../types"
import { getDay } from "../util"




export const TodaysMystery=({gutt}:{gutt:RosaryDay[]})=>{
    return(
        <>
        <h2 className=" text-3xl mt-8">Aicho gutt : {gutt[0].title}</h2>
        <h3 className="mt-2 text-2xl underline">Day: {getDay()}</h3>
        {
            gutt[0].mysteries.map((item,index)=>(
                <h4 key={item.title} className="text-3xl my-8">
                    {`${index+1}: ${item.title}`}
                </h4>
            ))
        }
       
        </>
    )
}

