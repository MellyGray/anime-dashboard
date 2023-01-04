import { Anime } from "./Anime";

export interface AnimeRepository {
	search(): Promise<Anime[]>;
}
