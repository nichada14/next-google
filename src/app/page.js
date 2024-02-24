import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src='https://logolook.net/wp-content/uploads/2021/06/Google-Logo.svg'
          alt='Google Logo'
          width={300}
          height={100}
          priority
          style={{ width: 'auto' }}
        />
        <HomeSearch />
      </div>
    </>
  );
}
