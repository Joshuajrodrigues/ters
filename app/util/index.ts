import fsPromises from 'fs/promises';
import path from 'path'


export const getRosaries =async () => {
  const filePath = path.join(process.cwd(), "app/data/rosary.json");
  const jsonData = await fsPromises.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return data
};

export const getDay=()=>{
    const today = new Date()
    var options = { weekday: 'long', timeZone: 'Asia/Kolkata' }; 
    const dayOfWeek = today.toLocaleDateString('en-IN',{
        weekday:'long',
        timeZone:'Asia/Kolkata'
    })
    return dayOfWeek
}

export const mapDayToKonkani:any = {
    sunday: "Aitar",
    monday: "Somar",
    tuesday: "Mûnglar",
    wednesday: "Bûdvar",
    thursday: "Brestar",
    friday: "Sûkrar",
    saturday: "Shenvar"
};