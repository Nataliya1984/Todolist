import React from "react";
import TodolistHeader from "./TodolistHeader";
import Task from "./Task";


type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const Todolist =(props: TodolistPropsType)=> {
    return(
            <div>
                <TodolistHeader title={props.title}/>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                   <Task {...props.tasks[0]}/>
                    <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
                    <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
    )
}

export default Todolist;