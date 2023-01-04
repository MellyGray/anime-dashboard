import { ReactComponent as AnimeBanner } from "./anime-banner.svg";
import styles from "./Banner.module.scss";

export function Banner() {
	return (
		<div className={styles.container}>
			<AnimeBanner className={styles.image} />
			<div className={styles.sidebar}>
				<header className={styles.sidebar__header}>
					<h2 className={styles.sidebar__title}>Header</h2>
				</header>
				<div className={styles.sidebar__body}>
					<span className={styles.sidebar__text}>Image</span>
				</div>
				<footer className={styles.sidebar__footer}>
					<span className={styles.sidebar__text}>Footer</span>
				</footer>
			</div>
		</div>
	);
}
