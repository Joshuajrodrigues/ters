import BackButton from "../components/backButton";

import data from '@/app/data/rosary.json'


export default async function AllRosaries() {

  return (
    <>
      <BackButton />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
