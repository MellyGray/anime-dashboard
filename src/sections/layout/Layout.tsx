import { Outlet } from "react-router-dom";

import styles from "./Layout.module.scss";

export function Layout() {
	return (
		<>
			<header className={styles.header}>
				<section className={styles.header__container}>
					<h1 className={styles.app__brand}>Anime Dashboard</h1>
				</section>
			</header>
			<Outlet />
		</>
	);
}
