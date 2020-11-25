const Token1 = artifacts.require("MyToken1.sol");
const Token2 = artifacts.require("MyToken2.sol");

module.exports = function (deployer) {
    await deployer.deploy(Token1);
    await deployer.deploy(Token2);
};
