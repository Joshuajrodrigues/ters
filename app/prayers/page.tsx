import Paragraph from "../components/paragraph";
import { QuickLinks } from "../components/quickLinks";
import { toNormalCase } from "../util";
import { RouteLabels, appRoutes } from "../util/routes";

const filteredRoutes = [appRoutes.home, appRoutes.prayers];

export default async function Prayers() {
  return (
    <>
      {
          Object.keys(appRoutes)
          //@ts-ignore
          .filter((item) => !filteredRoutes.includes(appRoutes[item]))
          .map((item, index) => (
             //@ts-ignore
            <QuickLinks key={index} route={appRoutes[item]}>
                {/**@ts-ignore */}
              <Paragraph>{`${index + 1}] ${RouteLabels[appRoutes[item]]}`}</Paragraph>
            </QuickLinks>
          ))
      }
    </>
  );
}
