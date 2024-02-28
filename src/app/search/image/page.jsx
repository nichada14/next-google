import ImageSearchResults from '@/components/ImageSearchResults';
import WebSearchResults from '@/components/WebSearchResults';
import Link from 'next/link';

export default async function ImageSearchPage({ searchParams }) {
  const srartIndex = searchParams.start || 1;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${srartIndex}`);

  if (!response.ok) throw new Error('Something went wrong');

  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className='flex flex-col items-center justify-center pt-10'>
        <h1 className='mb-4 text-3xl'>
          No results found for {searchParams.searchTerm}
        </h1>
        <p className='text-lg'>
          Try searching the web or images for something else{' '}
          <Link href='/' className='text-blue-500'>
            Home
          </Link>
        </p>
      </div>
    );
  }
  
  return (
    <div>
      {results && <ImageSearchResults results={data}/>}
    </div>
  )
}
