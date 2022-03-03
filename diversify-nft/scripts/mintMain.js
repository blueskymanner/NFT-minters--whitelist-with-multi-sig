const { ethers } = require("hardhat");

// ENTER ITEM NFT TOKEN ADDRESS HERE
const diversifyNFTAddress = "0x1c64A4a57446DBDA9C11d4fB8dcC783138Bc352E";

// ENTER ARRAY OF TOKENS TO MINT HERE;
const mintParams = [
  [
    "0x6f99e915Ee5B592a1Fd2203e15B0ECc157B535c8",
    "https://ipfs.io/ipfs/QmYa4mYwAVs4bfH4CS68dfkP2CgbnEe3fB85gQsgdhuDAo?filename=diversify-test.json",
  ],
  //   ["USER_ADDRESS_HERE", "TOKEN_URI_HERE"],
  //   ["USER_ADDRESS_HERE", "TOKEN_URI_HERE"],
  // ... add objects like this for multiple token minting
];

async function main() {
  diversifyNFT = await ethers.getContractAt(
    "DiversifyNFT",
    diversifyNFTAddress
  );

  const tx = await diversifyNFT.mint(mintParams);
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
