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
const fs = require("fs");
const hre = require("hardhat");
const run = hre.run;
const chainName = hre.network.name;

let data = JSON.parse(fs.readFileSync(`../state.${chainName}.json`).toString());

const main = async () => {
  console.log("Verifying contracts...");
  try {
    await run("verify:verify", {
      address: data["proxyAdminAddress"],
      constructorArguments: []
    });
    await run("verify:verify", {
      address: data["descriptorProxyAddress"],
      constructorArguments: [data["nonfungibleTokenPositionDescriptorAddress"], data["ownerAddress"], "0x"]
    });
  } catch (e) {
    console.log(e);
  }
};
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});