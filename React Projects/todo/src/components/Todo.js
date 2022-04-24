import React, { Component } from "react";

export class Todo extends Component {
    constructor() {
        super();

        this.state = {
            tasks: [],
            currTask: "",
        };
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            currTask: e.target.value,
        });
    };

    handleAddTask = () => {
        this.setState({
            tasks: [
                ...this.state.tasks,//spread operator ... yeh state.task ki ek copy bana k rakh dega, 
                //yeh upper diye task ko yaha le ayega or iska faida h ki yeh alag address bana deta h or
                // alag refernce ho jata h or react fast kaam karta h changes pata chal jate h indirect method se
                // task : newTask , id : array.length+1
                { task: this.state.currTask, id: this.state.tasks.length + 1 },
            ],
            currTask: "",
        });
    };

    handleDelete = (id) => {
        let narr = this.state.tasks.filter((taskObj) => {
            return taskObj.id != id;
        });

        this.setState({
            tasks: [...narr]
        });
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.currTask}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleAddTask}>Add Task</button>

                <ul>
                    {this.state.tasks.map((taskObj) => (
                        <li>
                            <p>{taskObj.task}</p>
                            <button onClick={() => this.handleDelete(taskObj.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Todo;