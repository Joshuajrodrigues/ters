"use client"
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button className=' bg-orange-600 text-slate-800 p-2  font-semibold' onClick={handleClick}>
      Back
    </button>
  );
};

export default BackButton;
