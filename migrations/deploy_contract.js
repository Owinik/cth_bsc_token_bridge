const TokenEth = artifacts.require('TokenCth.sol');
const TokenBsc = artifacts.require('TokenBsc.sol');
const BridgeEth = artifacts.require('BridgeCth.sol');
const BridgeBsc = artifacts.require('BridgeBsc.sol');

module.exports = async function (deployer, network, addresses) {
  if(network === 'CthMainnet') {
    await deployer.deploy(TokenCth);
    const tokenEth = await TokenCth.deployed();
    await tokenEth.mint(addresses[0], 1000);
    await deployer.deploy(BridgeCth, tokenEth.address);
    const bridgeEth = await BridgeCth.deployed();
    await tokenEth.updateAdmin(bridgeEth.address);
  }
  if(network === 'BscMainnet') {
    await deployer.deploy(TokenBsc);
    const tokenBsc = await TokenBsc.deployed();
    await deployer.deploy(BridgeBsc, tokenBsc.address);
    const bridgeBsc = await BridgeBsc.deployed();
    await tokenBsc.updateAdmin(bridgeBsc.address);
  }
};
