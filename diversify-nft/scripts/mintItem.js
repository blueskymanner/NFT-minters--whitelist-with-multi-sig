const { ethers } = require("hardhat");

// ENTER ITEM NFT TOKEN ADDRESS HERE
const diversifyNFTItemAddress = "0x45a1e0DA51b6a1D0De45B98E70587de636f5Ffb1";

// ENTER ARRAY OF TOKENS TO MINT HERE;
const mintParams = [
  ["0xee06986E54157FDF85cBa935d41fd47c27ab6F82", "TOKEN_URI_HERE"],
  //   ["USER_ADDRESS_HERE", "TOKEN_URI_HERE"],
  //   ["USER_ADDRESS_HERE", "TOKEN_URI_HERE"],
  // ... add objects like this for multiple token minting
];

async function main() {
  diversifyNFTItem = await ethers.getContractAt(
    "DiversifyNFTItem",
    diversifyNFTItemAddress
  );

  const tx = await diversifyNFTItem.mint(mintParams);
  console.log(`✅ Minting Done: ${tx.hash}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
