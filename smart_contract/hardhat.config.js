//https://eth-ropsten.alchemyapi.io/v2/3OFimp0pDCVDVV2geLGi5JdojvLxch0K


require('@nomiclabs/hardhat-waffle');

const PRIVATE_KEY = process.env.REACT_PRIVATE_KEY || "your private key"
console.log(PRIVATE_KEY)
module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/3OFimp0pDCVDVV2geLGi5JdojvLxch0K',
      accounts: [PRIVATE_KEY],
    },
  },
};