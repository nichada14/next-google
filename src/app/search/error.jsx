"use client";
import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.log('error', error);
    }, [error]);

  return (
    <div className="flex flex-col items-center justify-center pt-10">
        <h1 classname="mb-4 text-3xl">Something went wrong!</h1>
        <button className="text-blue-500">Try again</button>
    </div>
  )
}
