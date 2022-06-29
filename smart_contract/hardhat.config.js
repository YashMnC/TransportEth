//This plugin is used to build smart contract tests
//using Waffle in Hardhat

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/HAgpQIXvw4pSH9YrrJIi3CUpOWa9rkLc",
      accounts: [
        "3ed65334f103ce4630a0aa57fc2bb7794e3c9f86b3cfb581087157b510591189",
      ],
    },
  },
};
