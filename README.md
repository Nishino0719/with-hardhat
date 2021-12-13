# Advanced Sample Hardhat Project

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

## development

```bash
npx hardhat
```

```bash
# compile
yarn compile
# copy contracts json
cp -r artifacts/contracts/ src/contracts/
# dev
yarn dev
```

## package

[useDApp](https://usedapp.io/#about)

```bash
 yarn add @ethersproject/providers @web3-react/core @web3-react/injected-connector @web3-react/walletconnect-connector ethers web3
```

## deploy

```bash
yarn scdeploy --network ropsten
```
