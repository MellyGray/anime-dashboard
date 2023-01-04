import { AnimeRepository } from "../../domain/AnimeRepository";
import { ReactComponent as Banner } from "./anime-banner.svg";
import styles from "./Dashboard.module.scss";
import { useAnimes } from "./useAnimes";

export function Dashboard({ animeRepository }: { animeRepository: AnimeRepository }) {
	const { animes } = useAnimes(animeRepository);

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
