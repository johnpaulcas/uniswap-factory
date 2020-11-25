const Token1 = artifacts.require("MyToken1.sol");
const Token2 = artifacts.require("MyToken2.sol");

module.exports = async function (deployer) {
    await deployer.deploy(Token1, web3.utils.toWei('1000000', 'ether'));
    await deployer.deploy(Token2, web3.utils.toWei('1000000', 'ether'));
};
