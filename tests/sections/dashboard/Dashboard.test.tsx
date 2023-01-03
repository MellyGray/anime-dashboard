import { render, screen } from "@testing-library/react";
import { mock } from "jest-mock-extended";

import { AnimeRepository } from "../../../src/domain/AnimeRepository";
import { Dashboard } from "../../../src/sections/dashboard/Dashboard";
import { AnimeMother } from "../../AnimeMother";

const mockAnimeRepository = mock<AnimeRepository>();

describe("Dashboard section", () => {
	test("show all widgets", async () => {
		const anime = AnimeMother.create();

		mockAnimeRepository.search.mockResolvedValue([anime]);

		render(<Dashboard animeRepository={mockAnimeRepository}></Dashboard>);

		const firstWidgetTitle = anime.title;
		const firstWidgetHeader = await screen.findByRole("heading", {
			name: new RegExp(firstWidgetTitle, "i"),
		});

		expect(firstWidgetHeader).toBeInTheDocument();
	});
});
