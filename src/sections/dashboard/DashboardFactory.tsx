import { JikanApiAnimeRepository } from "../../infrastructure/JikanApiAnimeRepository";
import { Dashboard } from "./Dashboard";

const animeRepository = new JikanApiAnimeRepository();

export class DashboardFactory {
	static create(): React.ReactElement {
		return <Dashboard animeRepository={animeRepository} />;
	}
}
