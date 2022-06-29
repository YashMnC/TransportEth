const main = async () => {
  //https://docs.ethers.io/v5/single-page/#/v5/api/contract/contract-factory/
  /*To deploy a Contract, additional information is needed that is
not available on a Contract object itself.
Mainly, the bytecode (more specifically the initcode) of a
contract is required.
The Contract Factory sends a special type of transaction,
an initcode transaction (i.e. the to field is null, and the 
data field is the initcode) where the initcode will be evaluated
and the result becomes the new code to be deployed as a new 
contract.
*/
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  /*
Uses the signer to deploy the Contract with args passed into 
the constructor and returns a Contract which is attached to 
the address where this contract will be deployed once the 
transaction is mined.
*/
  const transaction = await Transactions.deploy();

  //.deployed() returns the deployed contract on the active network
  await transaction.deployed();

  console.log("Transactions deployed to:", transaction.address);
};

const runMain = async () => {
  try {
    await main(); //execute and deploy the contract.
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
