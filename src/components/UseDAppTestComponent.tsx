import { formatEther } from '@ethersproject/units'
import { useEtherBalance, useEthers } from '@usedapp/core'
import React from 'react'
import { GreeterContract } from './GreeterContractComponent'

type Props = {}

export const UseDAppTestComponent: React.FC<Props> = (props) => {
  const { activateBrowserWallet, account } = useEthers()
  const etherBalance = useEtherBalance(account)
  return (
    <div>
      <div>
        <button onClick={() => activateBrowserWallet()}>Connect</button>
      </div>
      {account && (
        <div className="">
          <p>Account: {account}</p>
          {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}
          <GreeterContract />
        </div>
      )}
    </div>
  )
}
