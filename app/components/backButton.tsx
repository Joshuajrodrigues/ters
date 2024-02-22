
import Link from "next/link"
import { appRoutes } from '../util/routes';
const BackButton = () => {

  return (
 
    <Link href={appRoutes.home} className=' bg-orange-600 text-slate-800 p-2  font-semibold' >
      Back
    </Link>
  );
};

export default BackButton;
