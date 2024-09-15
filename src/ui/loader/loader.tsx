import styles from "./styles.module.css"

const Loader = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className={styles.loader}>
      </div>
    </section>
  );
}
 
export {Loader};