describe("submitting booking form", () => {
	it("submitting valid form shows success", () => {
		cy.visit("http://localhost:3000/book");
		cy.server();
		cy.route({
			method: "POST",
			url: "/api/book",
			response: { _id: "1a2b3c4d5e6f" },
		});
		cy.makeBooking();
		cy.get(".bookSuccess").should("be.visible");
	});
	it("booking error shows error", () => {
		cy.server();
		cy.visit("http://localhost:3000/book");
		cy.route({
			method: "POST",
			url: "/api/book",
			status: 500,
			response: { msg: "Booking failed" },
		});
		cy.makeBooking();
		cy.get(".bookFail").should("be.visible");
	});
	it("booking full shows full", () => {
		cy.server();
		cy.visit("http://localhost:3000/book");
		cy.route({
			method: "POST",
			url: "/api/book",
			status: 409,
			response: { msg: "Booking full", day: "20/04/2020", time: "18:30" },
		});
		cy.makeBooking();
		cy.get(".bookFull").should("be.visible");
	});
});
