const TokenCth = artifacts.require('./TokenCth.sol');

module.exports = async done => {
  const [sender, _] = await web3.eth.getAccounts();
  const tokenCth = await TokenEth.deployed();
  const balance = await tokenEth.balanceOf(sender);
  console.log(balance.toString());
  done();
}
