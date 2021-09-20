const tasksContract = artifacts.require("TasksContract");

module.exports = function(deployer) {
  deployer.deploy(tasksContract);
};
