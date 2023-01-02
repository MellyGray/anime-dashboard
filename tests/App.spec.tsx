import { render, screen } from "@testing-library/react";

import { App } from "../src/App";

test("App dashboard display", () => {
	render(<App />);

	const span = screen.getByText(/🌸 Anime Dashboard/i);

	expect(span).toBeInTheDocument();
});
