// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.7;

contract Array {
    uint[] private arr;

    function remove(uint index) public returns(uint){
        if(index >= arr.length || index < 0) {
            return 0;
        }
        
        for(uint i = index+1; i<arr.length; i++){
            arr[index] = arr[index+1];
            index += 1;
        }
        arr.pop();
        return 1;
    }

    function setArrayValue(uint[] memory demo) public{
        arr = demo;
    }

    function getValue() public view returns(uint[] memory){
        return arr;
    }
}