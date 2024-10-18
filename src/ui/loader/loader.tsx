import styles from "./styles.module.css"

const Loader = () => {
  return (
    <section className="w-screen h-full flex justify-center items-center">
      <div className={styles.loader}>
      </div>
    </section>
  );
}

export {Loader};