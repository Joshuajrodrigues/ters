

export const getDay = () => {
  const today = new Date();
  const dayOfWeek = today.toLocaleDateString("en-IN", {
    weekday: "long",
    timeZone: "Asia/Kolkata",
  });
  return dayOfWeek;
};

export const mapDayToKonkani: any = {
  sunday: "Aitar",
  monday: "Somar",
  tuesday: "Mûnglar",
  wednesday: "Bûdvar",
  thursday: "Brestar",
  friday: "Sûkrar",
  saturday: "Shenvar",
};

export function toNormalCase(str:string) {
  return str.replace(/\b\w/g, function(char) {
      return char.toUpperCase();
  });
}
