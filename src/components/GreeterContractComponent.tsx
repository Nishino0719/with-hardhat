import React, { useEffect, useState } from 'react'
import ABI from '../contracts/Greeter.sol/Greeter.json'
import { useEthers } from '@usedapp/core'
import { utils, Contract } from 'ethers'

type Props = {}

export const GreeterContract: React.FC<Props> = (props) => {
  const { library } = useEthers()
  const [greet, setGreet] = useState('')
  const [greetingText, setGreetingText] = useState('')
  const [fetching, setFetching] = useState(false)

  const getGreeter = async (): Promise<string> => {
    const abiInterface: utils.Interface = new utils.Interface(ABI.abi)
    const contract = new Contract(
      `${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`,
      abiInterface,
      library?.getSigner()
    )
    const greeter: string = await contract.greet()
    return greeter
  }

  const setGreeting = async (greeting: string): Promise<void> => {
    const abiInterface: utils.Interface = new utils.Interface(ABI.abi)
    const contract = new Contract(
      `${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`,
      abiInterface,
      library?.getSigner()
    )
    await contract.setGreeting(greeting)
  }
  useEffect(() => {
    if (library !== undefined) {
      setFetching(true)

      getGreeter()
        .then((greet) => {
          setGreet(greet)
        })
        .finally(() => {
          setFetching(false)
        })
    }
  }, [library])

  return (
    <div className="">
      {fetching ? (
        <p>Loading....</p>
      ) : (
        <div className="">
          <p className="text-lg font-bold">Greet : {greet}</p>
          <div className="">
            <input
              type="text"
              className="p-2 border rounded-md shadow-md"
              onChange={(e) => {
                if (e.target.value.length !== 0) {
                  setGreetingText(e.target.value)
                }
              }}
            />
            <button
              onClick={() => setGreeting(greetingText)}
              className="p-2 m-2 font-bold border rounded-md shadow-md "
            >
              set Greeting
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
