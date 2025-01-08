import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://plus.unsplash.com/premium_photo-1733983990097-e2e57eb5beae?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className={styles.authorInfo}>
            <strong>Emanuel Girardi</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2024-12-30 00:00">Publicado há 1h</time>
      </header>
    </article>
  );
}
