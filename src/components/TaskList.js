import { useState } from "react";
import style from "../styles/components/TaskList.module.css";

export function TaskList() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [completedTask,setCompletedTask] =useState(taskList.length)
  

  function addTask(event) {
    event.preventDefault();
    if (task) {
      setTaskList([...taskList, task]);
      setTask("");
      setCompletedTask(completedTask+1)
    }
  };


  function handleInputTask(event) {
    let inputTask = event.target.value;
    setTask(inputTask);
  };


  function handleCompletedTask(event){
   event.preventDefault()
    setCompletedTask(completedTask -1);
          
  };

  return (
    <div className={style.taskList}>
      <form>
        <input
          type="text"
          placeholder="Insira sua tarefa aqui"
          onChange={handleInputTask}
          value={task}
        />
        <button type="submit" onClick={addTask} className={style.taskButton}>
          Adcionar
        </button>
      </form>
      <ul>
        <p>Faltam {completedTask} de {taskList.length} tarefas</p>
        {taskList.map((task) => (
          <li onClick={handleCompletedTask}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
