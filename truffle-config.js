const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "224a9a4d448243159df3d10264e2519a";

const mnemonic = "extra flash wrap typical hard sphere pink pigeon void album success awesome";

module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "*" // Match any network id
      },
      ropsten: {
        provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
          network_id: 3,       // ropsten's id
          gas: 4500000,        // ropsten has a lower block limit than mainnet
          gasPrice: 10000000000
      }
    }
};