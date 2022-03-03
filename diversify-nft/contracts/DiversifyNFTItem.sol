//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DiversifyNFTItem is ERC721 {
    address public team;
    address public pendingTeam;

    mapping(uint256 => string) internal _tokenURIs;

    uint256 public totalSupply;

    event ChangeTeam(address _team);
    event AcceptTeam(address _team);
    event ChangeTokenURI(uint256 _tokenId, string _tokenURI);

    /// @param user Address of the user
    /// @param tokenURI URI of the token
    struct MintParams {
        address user; // address of the user
        string tokenURI; // uri of the token
    }

    modifier onlyTeam() {
        require(msg.sender == team, "not allowed");
        _;
    }

    /// @param _team Admin address
    constructor(address _team) ERC721("DiversifyNFTItem", "DSFITEM") {
        team = _team;
    }

    function mint(MintParams[] memory _recipient) external onlyTeam {
        for (uint256 i = 0; i < _recipient.length; i++) {
            totalSupply += 1;
            _mint(_recipient[i].user, totalSupply);
            _tokenURIs[totalSupply] = _recipient[i].tokenURI;
        }
    }

    /// @dev Changes token URI of specific tokenID
    /// @param _tokenId ID for which the URI needs to be updated
    /// @param _tokenURI New token URI
    function changeTokenURI(uint256 _tokenId, string memory _tokenURI)
        external
        onlyTeam
    {
        _tokenURIs[_tokenId] = _tokenURI;
    }

    /// @notice Returns tokenURI for specific tokenID
    /// @param _tokenId ID of the token
    function tokenURI(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        return _tokenURIs[_tokenId];
    }

    /// @notice Change admin address
    /// @param _team Address of the new admmin
    function changeTeam(address _team) external onlyTeam {
        pendingTeam = _team;
        emit ChangeTeam(_team);
    }

    /// @notice New admin needs to accept that he is new admin
    /// @dev should be called by the address set in changeTeam function.
    function acceptTeam() external {
        require(msg.sender == pendingTeam, "invalid");
        team = pendingTeam;
        pendingTeam = address(0);
        emit AcceptTeam(team);
    }
}
