import { render, screen } from "@testing-library/react";

import { jikanApiResponses } from "../../../src/jikan_api_responses";
import { Dashboard } from "../../../src/sections/dashboard/Dashboard";

describe("Dashboard section", () => {
	test("show all widgets", async () => {
		render(<Dashboard></Dashboard>);

		const firstWidgetTitle = jikanApiResponses.data[0].title;
		const firstWidgetHeader = await screen.findByRole("heading", {
			name: new RegExp(firstWidgetTitle, "i"),
		});

		expect(firstWidgetHeader).toBeInTheDocument();
	});
});
