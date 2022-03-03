//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/AccessControl.sol";

interface IDiversifyNFT {
    function mint(address, string memory) external;
}

contract DiversifyNFTSales is AccessControl {
    address public diversifyNFT;

    uint256 public fee;
    uint256 public mintLimit;
    uint256 public minted;

    mapping(uint256 => string) public tokenURIs; // intiial tokenURIs added
    mapping(uint256 => bool) public usedTokenURIs; // used tokenURIs to prevent double mint
    uint256 public tokenURICount;

    // roles
    bytes32 public constant WITHDRAWER_ROLE = keccak256("WITHDRAWER");
    bytes32 public constant ADMIN = keccak256("ADMIN");

    event ChangeFee(uint256 fee);

    modifier onlyOwner() {
        require(hasRole(ADMIN, msg.sender), "not allowed");
        _;
    }

    constructor(
        address _owner,
        uint256 _fee,
        address _diversifyNFT
    ) {
        fee = _fee;
        diversifyNFT = _diversifyNFT;
        mintLimit = 3000;
        _grantRole(ADMIN, _owner);
    }

    /// @notice Mints the NFT
    /// @param _user Address of the user
    /// @param _quantity Quantity of NFTs to be minted
    function mintForAll(address _user, uint256 _quantity) external payable {
        // check if the contract received fee
        require(msg.value >= fee * _quantity, "underpriced");

        for (uint256 i = 0; i < _quantity; i++) {
            require(minted + 1 <= mintLimit, "cannot mint more");
            // mint the NFT
            IDiversifyNFT(diversifyNFT).mint(_user, tokenURIs[minted]);
            usedTokenURIs[minted] = true;
            minted = minted + 1;
        }
    }

    // function mintForOnlyWhitelistUsers(address _user, uint256 _quantity, string memory signature) external payable {

    //     bytes32 sign = keccak256(abi.encodePacked( msg.sender));

    //     bool goon = false;

    //     if(keccak256(abi.encodePacked(sign)) == keccak256(abi.encodePacked(signature)))
    //     {
    //         goon = true;
    //     }

    //     require( goon, "NFTMint Invalid signature");


    //     // check if the contract received fee
    //     require(msg.value >= fee * _quantity, "underpriced");

    //     for (uint256 i = minted; i < minted + _quantity; i++) {
    //         require(minted + 1 <= mintLimit, "cannot mint more");
    //         // mint the NFT
    //         IDiversifyNFT(diversifyNFT).mint(_user, tokenURIs[i]);
    //         usedTokenURIs[i] = true;
    //         minted = minted + 1;
    //     }
    // }

    function mintForOnlyWhitelistUsers(address _user, uint256 _quantity, bytes32 signature) external payable {

        bytes32 sign = keccak256(abi.encodePacked(_user));

        // bytes32 converted_sign = signature;
        

        require( sign == signature, "NFTMint Invalid signature");

        // check if the contract received fee
        require(msg.value >= fee * _quantity, "underpriced");
        uint256 count = minted;
        for (uint256 i = minted; i < minted + _quantity; i++) {
            require(count + 1 <= mintLimit, "cannot mint more");
            // mint the NFT
            IDiversifyNFT(diversifyNFT).mint(_user, tokenURIs[i]);
            usedTokenURIs[i] = true;
            count = count + 1;
        }
            minted = count;
    }

    /// @notice add initial token URIs (should be called by team)
    /// @dev each tokenURI will be stored incrementally and same id will be used for minting
    /// @param _tokenURIs array of tokenURIs
    function addInitialURIs(string[] memory _tokenURIs) external onlyOwner {
        tokenURICount += 1;
        for (uint256 i = 0; i < _tokenURIs.length; i++) {
            tokenURIs[tokenURICount] = _tokenURIs[i];
        }
    }

    /// @notice Withdraw the accumulated ETH to address
    /// @param _to where the funds should be sent
    function withdraw(address payable _to) external {
        require(
            hasRole(ADMIN, msg.sender) || hasRole(WITHDRAWER_ROLE, msg.sender),
            "not allowed"
        );
        _to.transfer(address(this).balance);
    }

    /// @notice fallback receive function which keeps ETH in the contract itself
    receive() external payable {}

    /// @notice fallback function which keeps ETH in the contract itself
    fallback() external payable {}

    /// @notice Change minting fee
    function changeFee(uint256 _fee) external onlyOwner {
        fee = _fee;
        emit ChangeFee(_fee);
    }

    /// @notice Grants the withdrawer role
    /// @param _role Role which needs to be assigned
    /// @param _user Address of the new withdrawer
    function grantRole(bytes32 _role, address _user) public override onlyOwner {
        _grantRole(_role, _user);
    }

    /// @notice Revokes the withdrawer role
    /// @param _role Role which needs to be revoked
    /// @param _user Address which we want to revoke
    function revokeRole(bytes32 _role, address _user)
        public
        override
        onlyOwner
    {
        _revokeRole(_role, _user);
    }

    /// @notice Change max limit
    /// @param _mintLimit new max limit
    function changeMintLimit(uint256 _mintLimit) external onlyOwner {
        mintLimit = _mintLimit;
    }

    function getSignedMsgHash(
        address user,
        uint256 quantity
    ) internal pure returns (bytes32) {
        bytes32 msgHash = keccak256(abi.encodePacked(user, quantity));
        /*
        Signature is produced by signing a keccak256 hash with the following format:
        "\x19Ethereum Signed Message\n" + len(msg) + msg
        */
        return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", msgHash));
    }
}
