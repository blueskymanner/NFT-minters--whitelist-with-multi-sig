const { expect } = require("chai");
const { ethers } = require("hardhat");

let signers;
let diversifyNFT;
let sales;
let fee;

describe("DiversifyNFTSales", function () {
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

    const tx = await sales.addInitialURIs([
      "https://bored-ape.com",
      "https://someothernft.com",
      "https://someothernft.com",
    ]);
  });

  describe("#Mint and #Withdraw", function () {
    beforeEach(async function () {
      await sales.mint(signers[0].address, 1, {
        value: ethers.utils.parseEther("1.0"),
      });
    });

    it("should mint the NFT with correct id", async function () {
      expect(await diversifyNFT.ownerOf(1)).to.equals(signers[0].address);
    });

    it("should should update the minted variable", async function () {
      expect(await sales.minted()).to.equals(1);
    });

    it("should  revert if attached value is less than fee", async function () {
      expect(
        sales.mint(signers[0].address, 2, {
          value: ethers.utils.parseEther("0.001"),
        })
      ).to.be.revertedWith("underpriced");
    });

    it("should withdraw accumulated ETH", async function () {
      await sales.withdraw(signers[2].address);

      expect(await signers[2].getBalance()).to.equals(
        "10001000000000000000000"
      );
    });
  });

  it("should change mint limit", async function () {
    await sales.changeMintLimit("5000");
    expect(await sales.mintLimit()).to.equals("5000");
  });

  it("should change the withdrawer", async function () {
    const role = await sales.WITHDRAWER_ROLE();

    await sales.grantRole(role, signers[3].address);
    expect(await sales.hasRole(role, signers[3].address)).to.equals(true);
  });

  it("should set the owner address", async function () {
    const role = await sales.WITHDRAWER_ROLE();
    await sales.grantRole(role, signers[3].address);
    expect(await sales.hasRole(role, signers[3].address)).to.equals(true);
  });
});
