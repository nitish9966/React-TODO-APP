import { useState} from "react";
import style from './todo_list.module.css'

function Todo_list(){
const [tasks,setTasks]=useState([]);
const [newtasks,setNewTasks]=useState("");

// function handleInput(event){

// }
function addTask(){
    if(newtasks.trim()!==""){
        setTasks(t=>[...t,newtasks]);
        setNewTasks("")
    }
}
function deleteTask(index){
    const updatedTasks = tasks.filter((_,i)=>i!==index);
    setTasks(updatedTasks)
}
function moveTaskUp(index){
    if(index>0){
        const updatedTasks=[...tasks];
        [updatedTasks[index],updatedTasks[index-1]]=
        [updatedTasks[index-1],updatedTasks[index]]
        setTasks(updatedTasks);
    }
}
function moveTaskDown(index){
    if(index<tasks.length-1){
        const updatedTasks=[...tasks];
        [updatedTasks[index],updatedTasks[index+1]]=
        [updatedTasks[index+1],updatedTasks[index]]
        setTasks(updatedTasks);
    }
}

    return(
        <>
        <div className={style.todo}>
        <h1>
            Todo-List
        </h1>
        <div>
        <input type="text" 
        value={newtasks} 
        placeholder="Enter a task" 
        onChange={(e)=>setNewTasks(e.target.value)}/>

        <button className={style.add}
        onClick={addTask}>
            Add task
        </button>
        </div>
        <ol>
            {tasks.map((task,index)=>
                <li key={index}>
                    <span className={style.text}>{task}</span>
                    <button 
                    className={style.delete}
                    onClick={()=>deleteTask(index)}
                    >
                        Delete
                    </button>

                    <button 
                    className={style.up}
                    onClick={()=>moveTaskUp(index)}
                    >
                        ☝️
                    </button>

                    <button 
                    className={style.down}
                    onClick={()=>moveTaskDown(index)}
                    >
                        👇
                    </button>
                    
                </li>
            )}
        </ol>
        </div>
        </>
    );
}

export default Todo_list;