import { useEffect, useState } from "react";

import { Anime } from "../../../domain/Anime";
import { AnimeRepository } from "../../../domain/AnimeRepository";

export function useAnimes(repository: AnimeRepository): {
	animes: Anime[];
} {
	const [animes, setAnimes] = useState<Anime[]>([]);

	useEffect(() => {
		repository
			.search()
			.then((animes) => setAnimes(animes))
			.catch((error) => console.error("There was an error searching the animes", error));
	}, [repository]);

	return { animes };
}
