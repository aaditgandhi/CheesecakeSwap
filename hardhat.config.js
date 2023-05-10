//const { version } = require("hardhat");

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      // {
      //   version: "0.8.18"
      // },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
            // details: {
            //   yul: false
            // }
          },
          //viaIR: true
        }  
      }
      // {
      //   version: "0.8.0"
      // }
    ]
  },
  networks:{
    hardhat: {
      forking:{
        url: 'https://eth-mainnet.g.alchemy.com/v2/FcK9pTgHVDYvAzUBwVIf9cQUgpNGYC-5'
      }
    }
  }
};
