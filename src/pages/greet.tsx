import React, { useEffect } from 'react'
import Link from 'next/link'
import { DAppProviderLayout } from '../components/DAppProviderLayout'
import { UseDAppTestComponent } from '../components/UseDAppTestComponent'

export default function Greet() {
  return (
    <DAppProviderLayout>
      <p className="mt-10 text-4xl font-bold">
        This is trying out page of SmartContract
      </p>
      <UseDAppTestComponent />
      <Link href="/">
        <button className="w-64 p-2 my-5 font-bold duration-200 transform border-2 rounded-full shadow-md animate-pulse hover:scale-110">
          Go back to home
        </button>
      </Link>
    </DAppProviderLayout>
  )
}
