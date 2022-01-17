import Head from "next/head"
import Link from "next/link"
import { DAppProviderLayout } from "../components/DAppProviderLayout"
import { UseDAppTestComponent } from "../components/UseDAppTestComponent"

export default function Home() {
  return (
    <>
      <DAppProviderLayout>
        <p className="mt-10 text-4xl font-bold">
          This is trying out page of SmartContract
        </p>
        <UseDAppTestComponent />
      </DAppProviderLayout>
    </>
  )
}
