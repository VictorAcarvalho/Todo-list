import styles from "../styles/components/logo.module.css";
import Image from "next/image";
export function Logo(){
    return(
        <div className={styles.logoContainer}>

               <h1>To-DoZão</h1> 
                <Image 
                src="/cat.svg"
                alt="cat-ilustration"
                width={100}
                height={100} 
                />
        </div>
    );
};