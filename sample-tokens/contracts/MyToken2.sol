pragma solidity =0.6.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken2 is ERC20 {

    constructor(uint256 totalSupply) public ERC20("My Token 2", "MT2") {
        _mint(_msgSender(), totalSupply);
    }

}