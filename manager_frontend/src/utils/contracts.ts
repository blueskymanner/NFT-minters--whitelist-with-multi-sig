const anySporeTokenAbi = require("../utils/abi/sporetoken.json");

export const CONTRACTS_TYPE = {
  SPORE_TOKEN: "SPORE_TOKEN"
};

export const CONTRACTS = {
  
  [CONTRACTS_TYPE.SPORE_TOKEN]: {
    1: { address: '', abi: '' },
    4: { address: "0xFDbA3a454075E0A8a3dF2EB64c14a9021f73a3e7", abi: anySporeTokenAbi },
    56: { address: '', abi: '' },
    97: { address: '0xFDbA3a454075E0A8a3dF2EB64c14a9021f73a3e7', abi: anySporeTokenAbi },
  },
};
