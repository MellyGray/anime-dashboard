import { render, screen } from "@testing-library/react";

import { App } from "../src/App";

test("App dashboard display", () => {
	render(<App />);

	const header = screen.getByText(/Anime Dashboard/i);

	expect(header).toBeInTheDocument();
});
