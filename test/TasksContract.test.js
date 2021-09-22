const TasksContract = artifacts.require("TasksContract")

contract("Tasks contract", () => {

    before(async () => {
        this.tasksContract = await TasksContract.deployed()
    })

    it("migrate deployed successfully", async () => {
        const address = this.tasksContract.address

        assert.notEqual(address,null)
        assert.notEqual(address, undefined)
        assert.notEqual(address,0x0)
    })


    it("task counter correct", async () => {
        const tasksCounter = await this.tasksContract.taskCount()
        const task = await this.tasksContract.tasks(tasksCounter - 1)
    
        assert.equal(task.id.toNumber(),tasksCounter - 1)

        assert.equal(task.title, "primera");
        assert.equal(task.description, "primera description");
    })

    it("task created successfully", async () => {
        const result = await this.tasksContract.addTask("some", "description");
        const taskEvent = result.logs[0].args;
        
       // assert.equal(taskCount, 2);
        assert.equal("some", taskEvent._title);
        assert.equal("description",taskEvent._description);
    })

    it("task toggle successfully", async () => {
        const result2 = await this.tasksContract.toggleTask(0);
        const taskEvent = result2.logs[0].args;

        assert.equal(taskEvent.isDone, true);
        assert.equal(taskEvent.id, 0);
    })
})