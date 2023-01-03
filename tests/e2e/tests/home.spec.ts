describe("The Home Page", () => {
	it("successfully loads", () => {
		cy.visit("/");
		cy.findAllByText(/Anime Dashboard/i).should("exist");
	});
});
