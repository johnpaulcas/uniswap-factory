const Factory = artifacts.require("UniswapV2Factory");

module.exports = async function (deployer, network, accounts) {

    // make sure that this token contract deployed on your local blockchain
    const token1 = "<your token address>";
    const token2 = "<your token address>";

    await deployer.deploy(Factory, accounts[0]);
    const factory = await Factory.deployed();

    await factory.createPair(token1, token2);

};
