require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic = process.env.PRIVATE_KEY;
const infuraApiKey = process.env.INFURA_API_KEY

module.exports = {
  networks: {
    mainnet: {
      provider: function () {
        return new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraApiKey}`)
      },
      network_id: 1
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraApiKey}`)
      },
      network_id: 4
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0",
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}; 
