require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
    networks: {
        localhost: {
            chainId: 31337,
            // gasPrice: 130000000000,
        },
      /*  goerli: {
          url: GOERLI_RPC_URL,
          accounts: [PRIVATE_KEY],
          chainId: 5,
          blockConfirmations: 6,
      },
      */
      },
      namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
  solidity: {
    compilers: [{ version: "0.8.8"},{version: "0.6.6"}],
}, 
etherscan: {
  apiKey: ETHERSCAN_API_KEY,
},
    /*  gasReporter: {
         enabled: true,
         currency: "USD",
         outputFile: "gas-report.txt",
         noColors: true,
         // coinmarketcap: COINMARKETCAP_API_KEY,
        },*/
}
