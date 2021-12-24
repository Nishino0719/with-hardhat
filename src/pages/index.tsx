import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hardhat in Next.js</title>
      </Head>
      <div className="mb-20 text-center ">
        <p className="mx-10 mt-10 mb-5 text-4xl font-bold">
          Greet contract information
        </p>
        <p className="mx-auto text-sm font-bold text-left text-green-500 w-96">
          This is a very simple contract that allows you to register greetings
          and have the registered greetings returned to you.
        </p>
        <p>ABI → typechain</p>
        <Link href="/greet">
          <button className="w-64 p-2 my-5 font-bold duration-200 transform border-2 rounded-full shadow-md animate-pulse hover:scale-110">
            Trying out Greet SmartContract
          </button>
        </Link>
      </div>
    </>
  )
}
