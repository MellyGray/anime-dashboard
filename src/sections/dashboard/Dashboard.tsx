import { AnimeRepository } from "../../domain/AnimeRepository";
import { AnimeWidget } from "./AnimeWidget";
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
						{animes.map((anime) => (
							<AnimeWidget anime={anime} />
						))}
					</div>
				)}
			</div>
		</>
	);
}
