import styles from "../styles/pages/Home.module.css"
import {Logo} from "../components/Logo.js";
export default function Home() {
  return(
    <div>
      <div className={styles.container}>
        <Logo />
      <h1>Lista de tarefas</h1>
      </div>
    </div>
  );    
  
}
