import { screen } from "@testing-library/react";
import { mock } from "jest-mock-extended";

import { AnimeRepository } from "../../../src/domain/AnimeRepository";
import { Dashboard } from "../../../src/sections/dashboard/Dashboard";
import { AnimeMother } from "../../AnimeMother";
import { renderWithRouter } from "../../renderWithRouter";

const mockAnimeRepository = mock<AnimeRepository>();

describe("Dashboard section", () => {
	test("show all widgets", async () => {
		const anime = AnimeMother.create();

		mockAnimeRepository.search.mockResolvedValue([anime]);

		renderWithRouter(<Dashboard animeRepository={mockAnimeRepository}></Dashboard>);

		const firstWidgetTitle = anime.title;
		const firstWidgetHeader = await screen.findByRole("heading", {
			name: new RegExp(firstWidgetTitle, "i"),
		});

		expect(firstWidgetHeader).toBeInTheDocument();
	});

	it("show no anime results message when there are no widgets", async () => {
		mockAnimeRepository.search.mockResolvedValue([]);

		renderWithRouter(<Dashboard animeRepository={mockAnimeRepository}></Dashboard>);

		const noResults = await screen.findByText(new RegExp("There are no animes results", "i"));

		expect(noResults).toBeInTheDocument();
	});
});
