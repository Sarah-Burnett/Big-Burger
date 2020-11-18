describe("navigation between book page", () => {
	it("navigates to book page", () => {
		cy.visit("http://localhost:3000");
		cy.contains("Book Now").click();
		cy.url().should("include", "/book");
	});
	it("navigates back to home page", () => {
		cy.contains("Back").click();
		cy.url().should("not.include", "/book");
	});
});