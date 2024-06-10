import Image from "next/image";
import styles from "./home.module.css"
const Home = () => {
  return (
  <div className={styles.container}>
    <div className={styles.textContainer}>
        <h1 className={styles.title}> Creative thoughst agency</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ea odit. Similique quam veniam accusantium vero architecto optio deleniti non ipsam. Optio vel nam, vero velit ipsa nulla distinctio culpa.
          
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}> Learn more </button>
            <button className={styles.button}> contact </button>
          </div>
          <div className={styles.brands}>
            <Image src="/brands.png" alt="" fill></Image>
          </div>
        
    </div>
    
  <div className={styles.imgContainer}>
    <Image src="/hero.gif" alt="" fill></Image>
  </div>
  </div>
  )
};

export default Home;