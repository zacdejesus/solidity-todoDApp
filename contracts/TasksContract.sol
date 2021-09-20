// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TasksContract {

  uint taskCount;

  mapping(uint => Task) public tasks;

  struct Task {
    string title;
    string description;
    uint id;
    uint date;
    bool isDone;
  }

  function addTaks(string memory _title, string memory _description) public {
    tasks[taskCount] = Task(_title,_description,taskCount,block.timestamp, false);
    taskCount += 1;
  }

  // function toggleTask() {}
}
