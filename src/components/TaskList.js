import { useState } from "react";
import style from "../styles/components/TaskList.module.css";

export function TaskList() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const[cssCheck,setCssChek]=useState("");

  function addTask(event) {
    event.preventDefault();
    if (task) {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  function handleInputTask(event) {
    let inputTask = event.target.value;
    setTask(inputTask);
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
        {taskList.map((task) => (
          <li>
            {task}
            <input type="checkbox" className={style.checkTask} />
          </li>
        ))}
      </ul>
    </div>
  );
}
