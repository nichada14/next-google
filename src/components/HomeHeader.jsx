import Link from 'next/link'
import { TbGridDots } from 'react-icons/tb'

export default function HomeHeader() {
  return (
    <header className='flex justify-end p-5 text-sm'>
        <div className="flex items-center space-x-4">
            <Link 
                href={"http://mail.google.com"}
                className='hover:underline'
            >
                Gmail
            </Link>
            <Link 
                href={"http://image.google.com"}
                className='hover:underline'
            >
                Images
            </Link>
            <TbGridDots className='text-4xl bg-transparent rounded-full hover:bg-gray-200' />
            <button className="px-6 py-2 font-medium text-white transition-shadow bg-blue-500 rounded-md hover:brightness-105 hover:shadow-md">Sign in</button>
        </div>
    </header>
  )
}
