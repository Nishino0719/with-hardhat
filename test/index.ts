import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('Greeter', function () {
  this.timeout(60 * 1000)
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory('Greeter')
    const greeter = await Greeter.deploy('Hello, world!')
    await greeter.deployed()

    console.log(
      `Greeter Deploy Tx: https://ropsten.etherscan.io/tx/${greeter.deployTransaction.hash}`
    )
    console.log(`Greeter Contract Address: ${greeter.address}`)
    expect(await greeter.greet()).to.equal('Hello, world!')

    const setGreetingTx = await greeter.setGreeting('Hola, mundo!')

    // wait until the transaction is mined
    await setGreetingTx.wait()

    expect(await greeter.greet()).to.equal('Hola, mundo!')
  })
})
