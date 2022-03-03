const { expect } = require("chai");
const { ethers } = require("hardhat");

let signers;
let diversifyNFT;
let sales;
let fee;

describe("DiversifyNFT", function () {
  beforeEach(async function () {
    signers = await ethers.getSigners();

    const DiversifyNFT = await ethers.getContractFactory("DiversifyNFT");
    const DiversifyNFTSales = await ethers.getContractFactory(
      "DiversifyNFTSales"
    );

    diversifyNFT = await DiversifyNFT.deploy(signers[0].address);

    fee = "10000000000000000";

    sales = await DiversifyNFTSales.deploy(
      signers[0].address,
      fee,
      diversifyNFT.address
    );

    await diversifyNFT.changeMinter(sales.address);

    await sales.addInitialURIs([
      "https://bored-ape.com",
      "https://someothernft.com",
      "https://someothernft.com",
    ]);

    await sales.mint(signers[0].address, 1, {
      value: ethers.utils.parseEther("1.0"),
    });
  });

  it("should set the team address", async function () {
    expect(await diversifyNFT.owner()).to.equals(signers[0].address);
  });

  it("should update the total supply", async function () {
    expect((await diversifyNFT.totalSupply()).toString()).to.equals("1");
  });

  it("should change the token URI", async function () {
    await diversifyNFT.changeTokenURI("1", "new-uri.com");
    expect(await diversifyNFT.tokenURI("1")).to.equals("new-uri.com");
  });
});
