const BridgeCth = artifacts.require('./BridgeCth.sol');

module.exports = async done => {
  const [recipient, _] = await web3.eth.getAccounts();
  const bridgeCth = await BridgeCth.deployed();
  await bridgeCth.burn(recipient, 1000);
  done();
}
