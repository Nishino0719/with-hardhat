import React, { useEffect, useState } from 'react'
import { useEthers } from '@usedapp/core'
import { Greeter__factory } from '../types/index'

type Props = {}

export const GreeterContract: React.FC<Props> = (props) => {
  const { library } = useEthers()
  const [greet, setGreet] = useState('')
  const [greetingText, setGreetingText] = useState('')
  const [fetching, setFetching] = useState(false)

  const getGreeter = async (): Promise<string> => {
    const greetContract = new Greeter__factory(library.getSigner()).attach(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
    )
    const greet: string = await greetContract.greet()
    return greet
  }

  const setGreeting = async (greeting: string): Promise<void> => {
    const greetContract = new Greeter__factory(library.getSigner()).attach(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
    )
    await greetContract.setGreeting(greeting)
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
