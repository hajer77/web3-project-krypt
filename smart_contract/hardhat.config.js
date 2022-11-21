
require('@nomicfoundation/hardhat-chai-matchers');

module.exports={
  solidity:'0.8.0',
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/Sh56U1HiGAWvKoIOJPN2F5wn3Y3dExON',
      accounts:['98ee0d5b8b90cba168ec310301f0716be8d5fca131e7618362a227b7eb5f3158']
    }
  }
}