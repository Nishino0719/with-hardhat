import { DAppProvider, ChainId, Config } from '@usedapp/core'
import React from 'react'

type Props = {}

const config: Config = {
  readOnlyChainId: ChainId.Ropsten,
  readOnlyUrls: {
    [ChainId.Ropsten]: process.env.ROPSTEN_URL
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
