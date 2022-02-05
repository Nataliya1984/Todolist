import React from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";

// crud
//c - create
//r - read
//u - update
//d - delete



function App() {

    const tasks_1: Array<TaskType> =[
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS/TS', isDone: true},
    ]

    const tasks_2: Array<TaskType> =[
        {id: 1, title: 'CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ]

    const tasks_3: Array<TaskType> =[
        {id: 1, title: 'JS', isDone: true},
        {id: 2, title: 'TS', isDone: false},
        {id: 3, title: 'ReactJS', isDone: false},
    ]

    return (
        <div className="App">
           <Todolist title={'What to learn'} tasks={tasks_1}/>
           <Todolist title={'What to read'} tasks={tasks_2}/>
           <Todolist title={'What to buy'} tasks={tasks_3}/>
        </div>
    );
}



export default App;
