const { ethers } = require("hardhat");

/// ENTER FOllOWING DETAILS
const NETWORK = "rinkeby";
const TEAM_ADDRESS = "0x4F56Bc08d5D75eD0252d6de31896a9F4f4d6DBc7";
const FEE = "10000000000000000"; // fee in ETH (1e18 format)
/// ETHER ABOVE DETAILS

async function main() {
  const DiversifyNFTMain = await ethers.getContractFactory("DiversifyNFT");
  const DiversifyNFTItem = await ethers.getContractFactory("DiversifyNFTItem");
  const DiversifyNFTSales = await ethers.getContractFactory(
    "DiversifyNFTSales"
  );

  if (TEAM_ADDRESS.length != 0) {
    const diversifyNFTMain = await DiversifyNFTMain.deploy(TEAM_ADDRESS);
    const diversifyNFTItem = await DiversifyNFTItem.deploy(TEAM_ADDRESS);
    const diversifyNFTSales = await DiversifyNFTSales.deploy(
      TEAM_ADDRESS,
      FEE,
      diversifyNFTMain.address
    );

    console.log(`🎉 DiversifyNFTMain Deployed to ${diversifyNFTMain.address}`);
    console.log(`🎉 DiversifyNFTItem Deployed to ${diversifyNFTItem.address}`);
    console.log(
      `🎉 DiversifyNFTSales Deployed to ${diversifyNFTSales.address}`
    );

    try {
      await diversifyNFTMain.changeMinter(diversifyNFTSales.address);
      console.log("🎉 Sales contract added to main contract");
    } catch (error) {
      console.log("Error while adding minter, please add it manually");
    }

    console.log("============================================================");
    console.log("📊 Etherscan verification scripts");
    console.log(
      `DiversifyNFTMain: npx hardhat verify --network ${NETWORK} ${diversifyNFTMain.address} "${TEAM_ADDRESS}"`
    );
    console.log(
      `DiversifyNFTItem: npx hardhat verify --network ${NETWORK} ${diversifyNFTItem.address} "${TEAM_ADDRESS}"`
    );
    console.log(
      `DiversifyNFTSales: npx hardhat verify --network ${NETWORK} ${diversifyNFTSales.address} "${TEAM_ADDRESS}" "${FEE}" "${diversifyNFTMain.address}"`
    );
  } else {
    console.log("🔴 Please add team address in the script");
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
