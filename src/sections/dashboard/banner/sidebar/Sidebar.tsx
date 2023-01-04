import styles from "./Sidebar.module.scss";

export function Sidebar() {
	return (
		<div className={styles.container}>
			<header className={styles.container__header}>
				<h2 className={styles.container__title}>Header</h2>
			</header>
			<div className={styles.container__body}>
				<span className={styles.container__text}>Image</span>
			</div>
			<footer className={styles.container__footer}>
				<span className={styles.container__text}>Footer</span>
			</footer>
		</div>
	);
}
