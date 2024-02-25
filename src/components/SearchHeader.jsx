
import Link from 'next/link';
import Image from 'next/image';
import LogoGoogle from '/public/google-logo.png';
import SearchBox from './SearchBox';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
        <div className="flex items-center justify-between w-full p-6">
            <Link href="/">
                <Image
                    src={LogoGoogle}
                    alt='Google Logo'
                    width={120}
                    height={40}
                    priority
                />
            </Link>
            <div className="flex-1">
                <SearchBox />
            </div>
            <div className="hidden space-x-2 md:inline-flex">
                <RiSettings3Line className="p-2 text-4xl bg-transparent rounded-full cursor-pointer hover:bg-gray-200" />
                <TbGridDots className="p-2 text-4xl bg-transparent rounded-full cursor-pointer hover:bg-gray-200" />
            </div>
            <button 
                className="px-6 py-2 ml-2 font-medium text-white transition-shadow bg-blue-500 rounded-md hover:brightness-105 hover:shadow-md"
            >
                Sign in
            </button>
        </div>
    </header>
  )
}
