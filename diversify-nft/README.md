# DiversifyNFT

- Two types of NFTs Main and Item
- `tokenURI()` can be changed by team.

## Main NFTs:

**Metadata**

```
{
   "name":"DiversifyNFT",
   "description":"",
   "external_url":"",
   "image":"",
   "attributes":[
      {
         "trait_type":"Background",
         "value":""
      },
      {
         "trait_type":"Diamond Type",
         "value":""
      },
      {
         "trait_type":"Ring Type",
         "value":""
      },
      {
         "trait_type":"Diamond Color",
         "value":""
      },
      {
         "trait_type":"Box Type",
         "value":""
      }
   ]
}
```

## Item NFTS:

```
{
  "name": "DiversifyNFT",
  "description": "",
  "external_url": "",
  "image": "",
  "attributes": [
    {
      "trait_type": "Item Type",
      "value": ""
    },
    {
      "trait_type": "Item Color",
      "value": ""
    },
    {
      "trait_type": "Background",
      "value": ""
    }
  ]
}
```

### Steps to Run:

1. Clone the repo
2. Run `yarn`
3. Add following to `.env`
   `INFURA_KEY=YOUR_INFURA_KEY PRIVATE_KEY=YOUR_TEAM_PRIVATE_KEY ETHERSCAN_KEY=ETHERSCAN_KEY_FOR_VERIFICATION`
   **Deploy**
4. Add team address in `scripts/deploy.js`
5. Run `npx hardhat run --network rinkeby scripts/deploy.js`

**Mint an Item NFT**

1. Add required details in `scripts/mintItem.js`
2. Run `npx hardhat run --network rinkeby scripts/mintItem.js`

**Mint an Main NFT**

1. Add required details in `scripts/mintMain.js`
2. Run `npx hardhat run --network rinkeby scripts/mintMain.js`
