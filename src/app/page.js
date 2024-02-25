import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from 'next/image';
import LogoGoogle from '/public/google-logo.png';


export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src={LogoGoogle}
          alt='Google Logo'
          width={300}
          height={100}
          priority
        
        />
        <HomeSearch />
      </div>
    </>
  );
}
