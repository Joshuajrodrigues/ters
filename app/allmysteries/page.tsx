import BackButton from "../components/backButton";

import data from '@/app/data/rosary.json'


export default async function AllRosaries() {

  return (
    <>
      <BackButton />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {
        data.map((item)=>(
          <>
              <h2>
                {item.day.join(",")}
              </h2>
              <h3>
                {item.title}
              </h3>
          </>
        ))
      }
    </>
  );
}
