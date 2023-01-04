import { Anime } from "../domain/Anime";
import { AnimeRepository } from "../domain/AnimeRepository";
import { JikanApiResponse } from "./JikanApiResponse";

export class JikanApiAnimeRepository implements AnimeRepository {
	static readonly jikanUrl: string = "https://api.jikan.moe/v4/top/anime?filter=airing";

	async search(): Promise<Anime[]> {
		return fetch(JikanApiAnimeRepository.jikanUrl)
			.then((response) => response.json())
			.then((response) => {
				const jikanApiResponse = response as JikanApiResponse;

				return jikanApiResponse.data.map((anime) => {
					return {
						id: anime.mal_id,
						url: anime.url,
						title: anime.title,
						imageUrl: anime.images.jpg.image_url,
						score: anime.score,
					};
				});
			});
	}
}
