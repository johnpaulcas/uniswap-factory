const Router = artifacts.require('UniswapV2Router02.sol')
const WETH = artifacts.require("WETH.sol");

module.exports = function (deployer) {
    const FACTORY_ADDRESS = "<your factory address here>";

    await deployer.deploy(WETH);
    const weth = await WETH.deployed();

    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
