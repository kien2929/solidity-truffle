const SimpleToken = artifacts.require('MyToken');

module.exports = async function (deployer) {
  await deployer.deploy(SimpleToken);
};
