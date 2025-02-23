import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://plus.unsplash.com/premium_photo-1733983990097-e2e57eb5beae?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className={styles.cover}
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/EmanuelSergio.png"
        />

        <strong>Emanuel Girardi</strong>
        <span>FullStack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
