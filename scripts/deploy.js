const hre = require("hardhat");
const {ethers} = require("hardhat")

async function main() {
  const BooToken = await hre.ethers.getContractFactory("BooToken")
  const booToken = await BooToken.deploy();
  await booToken.deployed();
  console.log(`Boo deployed to ${booToken.address}`)

  const LifeToken = await hre.ethers.getContractFactory("LifeToken");
  const lifeToken = await LifeToken.deploy();
  await lifeToken.deployed();
  console.log(`Life deployed to ${lifeToken.address}`)

  const SingleSwapToken = await hre.ethers.getContractFactory("SingleSwapToken");
  const singleSwapToken = await SingleSwapToken.deploy();
  await singleSwapToken.deployed();
  console.log(`SmallS deployed to ${singleSwapToken.address}`)

  const SwapMultiHop = await hre.ethers.getContractFactory("SwapMultiHop");
  const swapMultiHop = await SwapMultiHop.deploy();
  await swapMultiHop.deployed();
  console.log(`SwapM deployed to ${swapMultiHop.address}`)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});