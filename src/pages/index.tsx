import Head from 'next/head'
import Link from 'next/link'
import GleetContract from '../../artifacts/contracts/Greeter.sol/Greeter.json'

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
        <div className="flex flex-wrap justify-center ">
          <div className="p-5 m-5 text-left border rounded-lg shadow-md w-96">
            <p className="text-lg font-bold">
              contractName:{' '}
              <span className="text-green-400 ">
                {GleetContract.contractName}
              </span>
            </p>
          </div>
          <div className="p-5 m-5 text-left border rounded-lg shadow-md w-96">
            <p className="text-lg font-bold">
              sourceName:{' '}
              <span className="text-green-400 ">
                {GleetContract.sourceName}
              </span>
            </p>
          </div>
          <div className="p-5 m-5 text-left border rounded-lg shadow-md w-96">
            <p className="text-lg font-bold">
              bytecode:{' '}
              <span className="text-green-400 ">
                {GleetContract.bytecode.slice(0, 20) + '...'}
              </span>
            </p>
          </div>
          <div className="p-5 m-5 text-left border rounded-lg shadow-md w-96">
            <p className="text-lg font-bold">
              deployedBytecode:{' '}
              <span className="text-green-400 ">
                {GleetContract.deployedBytecode.slice(0, 13) + '...'}
              </span>
            </p>
          </div>
          <div className="p-5 m-5 text-left border rounded-lg shadow-md w-96">
            <p className="text-lg font-bold">
              stateMutability:{' '}
              <span className="text-green-400 ">
                {GleetContract.abi[0].stateMutability}
              </span>
            </p>
          </div>
        </div>
        <Link href="/greet">
          <button className="w-64 p-2 my-5 font-bold duration-200 transform border-2 rounded-full shadow-md animate-pulse hover:scale-110">
            Trying out Greet SmartContract
          </button>
        </Link>
      </div>
    </>
  )
}
