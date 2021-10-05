const TokenCth = artifacts.require('TokenCth.sol');
const TokenBsc = artifacts.require('TokenBsc.sol');
const BridgeCth = artifacts.require('BridgeCth.sol');
const BridgeBsc = artifacts.require('BridgeBsc.sol');

module.exports = async function (deployer, network, addresses) {
  if(network === 'CthMainnet') {
    await deployer.deploy(TokenCth);
    const tokenCth = await TokenCth.deployed();
    await tokenCth.mint(addresses[0], 1000);
    await deployer.deploy(BridgeCth, tokenCth.address);
    const bridgeCth = await BridgeCth.deployed();
    await tokenCth.updateAdmin(bridgeCth.address);
  }
  if(network === 'BscMainnet') {
    await deployer.deploy(TokenBsc);
    const tokenBsc = await TokenBsc.deployed();
    await deployer.deploy(BridgeBsc, tokenBsc.address);
    const bridgeBsc = await BridgeBsc.deployed();
    await tokenBsc.updateAdmin(bridgeBsc.address);
  }
};
