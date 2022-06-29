//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0; //version of solidity used



//contract is similar to classes in other programing languages.
contract Transactions {
    uint256 transactionCount;
    //event is similar to a function,which will be called/emitted later on.
    event Transfer(address from,address receiver,uint256 amount,string message,uint256 timestamp,string keyword);

    //structure/object blueprint
    struct TransferStruct{
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    //array of type TransferStruct
    TransferStruct[] transactions;

    //we can use the keyword payable to specify that an address or a function can receive Ether.
    //“memory” is used to hold temporary values.
    function addToBlockchain(address payable receiver,uint256 amount,string memory message,string memory keyword) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender,receiver,amount,message,block.timestamp,keyword));

        emit Transfer(msg.sender,receiver,amount,message,block.timestamp,keyword);
    }

      function getAllTransactions() public view returns (TransferStruct[] memory) {
            return transactions;
    }

      function getTransactionCount() public view returns (uint256) {
            return transactionCount;
    }
}



