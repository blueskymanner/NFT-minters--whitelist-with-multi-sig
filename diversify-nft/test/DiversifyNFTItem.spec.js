const { expect } = require("chai");
const { ethers } = require("hardhat");

let signers;
let diversifyNFTItem;

describe("DiversifyNFTItem", function () {
  beforeEach(async function () {
    signers = await ethers.getSigners();

    const DiversifyNFTItem = await ethers.getContractFactory("DiversifyNFTItem");
    diversifyNFTItem = await DiversifyNFTItem.deploy(signers[0].address);
  });

  it("should set the team address", async function () {
    expect(await diversifyNFTItem.team()).to.equals(signers[0].address);
  });
  it("should mint the NFT", async function () {
    await diversifyNFTItem.mint([[signers[1].address, "https://some-url.com"]]);
    expect(
      (await diversifyNFTItem.balanceOf(signers[1].address)).toString()
    ).to.equals("1");
  });

  it("should update the total supply", async function () {
    await diversifyNFTItem.mint([[signers[1].address, "https://some-url.com"]]);
    expect((await diversifyNFTItem.totalSupply()).toString()).to.equals("1");
  });

  it("should change the token URI", async function () {
    await diversifyNFTItem.mint([[signers[1].address, "https://some-url.com"]]);
    await diversifyNFTItem.changeTokenURI("1", "new-uri.com");
    expect(await diversifyNFTItem.tokenURI("1")).to.equals("new-uri.com");
  });
  it("should change the team address", async function () {
    await diversifyNFTItem.changeTeam(signers[1].address);
    await diversifyNFTItem.connect(signers[1]).acceptTeam();
    expect(await diversifyNFTItem.team()).to.equals(signers[1].address);
  });
});
