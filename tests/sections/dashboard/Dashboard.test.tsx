import { screen, render } from "@testing-library/react";
import { Dashboard } from "../../../src/sections/dashboard/Dashboard";

describe("Dashboard section", () => {
	test("show all widgets", async () => {
        render(<Dashboard></Dashboard>);

        const firstWidgetTitle = `Widget heading 1`;
		const firstWidgetHeader = await screen.findByRole("heading", {
			name: new RegExp(firstWidgetTitle, "i"),
		});

		expect(firstWidgetHeader).toBeInTheDocument();
    });
});