// Copyright 2024 justin
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {
  solidity: "0.7.4",
  networks: {
    thanossepolia: {
      url: `https://rpc.thanos-sepolia-test.tokamak.network`,
      accounts: [`${process.env.PRIVATE_KEY}`],
      chainId: 111551118080
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
    customChains: [
      {
        network: "thanossepolia",
        chainId: 111551118080,
        urls: {
          apiURL: "https://explorer.thanos-sepolia-test.tokamak.network/api",
          browserURL: "https://explorer.thanos-sepolia-test.tokamak.network/"
        }
      }
    ]
  }
};
