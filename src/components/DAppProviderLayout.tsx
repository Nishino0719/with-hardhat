import { DAppProvider, ChainId, Config } from '@usedapp/core'
import React from 'react'

type Props = {}

const config: Config = {
  readOnlyChainId: ChainId.Ropsten,
  readOnlyUrls: {
    [ChainId.Ropsten]:
      'https://ropsten.infura.io/v3/85fe9488dddd41e89e2403d9ec90295f'
  }
}

export const DAppProviderLayout: React.FC<Props> = (props) => {
  const { children } = props
  return (
    <div className="mx-10 mb-20">
      <DAppProvider config={config}>{children}</DAppProvider>
    </div>
  )
}
