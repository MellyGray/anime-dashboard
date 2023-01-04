import { ReactComponent as AnimeBanner } from "./anime-banner.svg";
import styles from "./Banner.module.scss";
import { Sidebar } from "./sidebar/Sidebar";

export function Banner() {
	return (
		<div className={styles.container}>
			<AnimeBanner className={styles.image} />
			<Sidebar />
		</div>
	);
}
