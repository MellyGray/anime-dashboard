import { Anime } from "../../../domain/Anime";
import styles from "./AnimeWidget.module.scss";

export function AnimeWidget({ anime }: { anime: Anime }) {
	return (
		<article className={styles.container} key={anime.id}>
			<header className={styles.container__header}>
				<a
					className={styles.container__title}
					href={anime.url}
					target="_blank"
					title={anime.title}
					rel="noreferrer"
				>
					<h2 className={styles.container__title}>{anime.title}</h2>
				</a>
			</header>
			<div className={styles.container__body}>
				<img src={anime.imageUrl} alt={anime.title} className={styles.container__image}></img>
			</div>
			<footer className={styles.container__footer}>
				<span className={styles.container__text}>Score {anime.score}</span>
			</footer>
		</article>
	);
}
