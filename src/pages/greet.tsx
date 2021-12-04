import React, { useEffect } from 'react'
import Link from 'next/link'

export default function Greet() {
  useEffect(() => {}, [])

  return (
    <div className="mb-20 text-center">
      <p className="mt-10 text-4xl font-bold">
        This is trying out page of SmartContract
      </p>
      <Link href="/">
        <button className="w-64 p-2 my-5 font-bold duration-200 transform border-2 rounded-full shadow-md animate-pulse hover:scale-110">
          Go back to home
        </button>
      </Link>
    </div>
  )
}
