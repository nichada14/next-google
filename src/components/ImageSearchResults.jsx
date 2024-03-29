import React from 'react'
import Link from 'next/link';
import PaginationButtons from './PaginationButtons';

export default function ImageSearchResults({ results }) {
  return (
    <div className='pb-40 mt-4 sm:pb-24'> 
        <div className="grid grid-cols-1 px-3 space-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.items.map((result) => (
                <div 
                    className="mb-8" 
                    key={result.link}
                >
                    <div className="group">
                        <Link href={result.image.contextLink}>
                            <img 
                                src={result.link} 
                                alt={result.title} 
                                className="object-contain w-full transition-shadow duration-300 h-60 group-hover:shadow-xl"
                            />
                        </Link>
                        <Link href={result.image.contextLink}>
                            <h2 className="text-xl truncate group-hover:underline">
                                {result.title}
                            </h2>
                        </Link>
                        <Link href={result.image.contextLink}>
                            <p className="text-gray-600 truncate group-hover:underline">
                                {result.displayLink}
                            </p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
        <div className="ml-16">
            <PaginationButtons />
        </div>
    </div>
  )
}
