import BackButton from "../components/backButton";
import { Rosaries } from "../types";
import { getRosaries } from "../util";

async function getData() {
  const data = await getRosaries();

  return data;
}
export default async function AllRosaries() {
  const data: Rosaries = await getData();
  return (
    <>
      <BackButton />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
