import { AnimeRepository } from "../../domain/AnimeRepository";
import { Banner } from "./Banner";
import styles from "./Dashboard.module.scss";
import { useAnimes } from "./useAnimes";

export function Dashboard({ animeRepository }: { animeRepository: AnimeRepository }) {
	const { animes } = useAnimes(animeRepository);

	return (
		<>
			<div className={styles.container}>
				<Banner />
				{animes.length === 0 ? (
					<div className={styles.empty}>
						<span>There are no animes results.</span>
					</div>
				) : (
					<div className={styles.widgets_container}>
						{animes.map((widget) => (
							<article className={styles.widget} key={widget.id}>
								<header className={styles.widget__header}>
									<a
										className={styles.widget__title}
										href={widget.url}
										target="_blank"
										title={widget.title}
										rel="noreferrer"
									>
										<h2 className={styles.widget__title}>{widget.title}</h2>
									</a>
								</header>
								<div className={styles.widget__body}>
									<img
										src={widget.imageUrl}
										alt={widget.title}
										className={styles.widget__image}
									></img>
								</div>
								<footer className={styles.widget__footer}>
									<span className={styles.widget__text}>Score {widget.score}</span>
								</footer>
							</article>
						))}
					</div>
				)}
			</div>
		</>
	);
}
