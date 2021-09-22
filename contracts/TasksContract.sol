// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TasksContract {

  uint public taskCount = 0;

  mapping(uint => Task) public tasks;

  constructor () public {
    addTask("primera","primera description");
  }

  struct Task {
    string title;
    string description;
    uint id;
    uint date;
    bool isDone;
  }

  event TaskCreated(
      string _title,
      string _description
  );

  event TaskToggleDone(
    uint id, 
    bool isDone
  );

  function addTask(string memory _title, string memory _description) public {
    tasks[taskCount] = Task(_title,_description,taskCount,block.timestamp, false);
    taskCount += 1;
    emit TaskCreated(_title, _description);
  }

  function toggleTask(uint _id) public {
    Task memory _task = tasks[_id];
    _task.isDone = !_task.isDone;
    tasks[_id] = _task;
    emit TaskToggleDone(_id, true);
  }
}
