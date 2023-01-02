import { ReactComponent as Banner } from "./anime-banner.svg";
import styles from "./Dashboard.module.scss";

export function Dashboard() {
	return (
		<>
			<header className={styles.header}>
				<section className={styles.header__container}>
					<h1 className={styles.app__brand}>Anime Dashboard</h1>
				</section>
			</header>
			<div className={styles.container}>
				<div className={styles.banner}>
					<Banner className={styles.banner__svg} />
					<div className={styles.sidebar_container}>
						<aside className={styles.sidebar}>
							<header className={styles.widget__header}>
								<h2 className={styles.widget__title}>Header</h2>
							</header>
							<div className={styles.widget__body}>
								<span className={styles.widget__text}>Image</span>
							</div>
							<footer className={styles.widget__footer}>
								<span className={styles.widget__text}>Footer</span>
							</footer>
						</aside>
					</div>
				</div>
				<div className={styles.widgets_container}>
					<article className={styles.widget}>
						<header className={styles.widget__header}>
							<h2 className={styles.widget__title}>Header</h2>
						</header>
						<div className={styles.widget__body}>
							<span className={styles.widget__text}>Image</span>
						</div>
						<footer className={styles.widget__footer}>
							<span className={styles.widget__text}>Footer</span>
						</footer>
					</article>
					<article className={styles.widget}>
						<header className={styles.widget__header}>
							<h2 className={styles.widget__title}>Header</h2>
						</header>
						<div className={styles.widget__body}>
							<span className={styles.widget__text}>Image</span>
						</div>
						<footer className={styles.widget__footer}>
							<span className={styles.widget__text}>Footer</span>
						</footer>
					</article>
					<article className={styles.widget}>
						<header className={styles.widget__header}>
							<h2 className={styles.widget__title}>Header</h2>
						</header>
						<div className={styles.widget__body}>
							<span className={styles.widget__text}>Image</span>
						</div>
						<footer className={styles.widget__footer}>
							<span className={styles.widget__text}>Footer</span>
						</footer>
					</article>
					<article className={styles.widget}>
						<header className={styles.widget__header}>
							<h2 className={styles.widget__title}>Header</h2>
						</header>
						<div className={styles.widget__body}>
							<span className={styles.widget__text}>Image</span>
						</div>
						<footer className={styles.widget__footer}>
							<span className={styles.widget__text}>Footer</span>
						</footer>
					</article>
					<article className={styles.widget}>
						<header className={styles.widget__header}>
							<h2 className={styles.widget__title}>Header</h2>
						</header>
						<div className={styles.widget__body}>
							<span className={styles.widget__text}>Image</span>
						</div>
						<footer className={styles.widget__footer}>
							<span className={styles.widget__text}>Footer</span>
						</footer>
					</article>
				</div>
			</div>
		</>
	);
}
