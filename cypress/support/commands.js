// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("makeBooking", () => {
	cy.get("#name").clear().type("Fred").should("have.value", "Fred");
	cy.get("#email")
		.clear()
		.type("fred@gmail.com")
		.should("have.value", "fred@gmail.com");
	cy.get("#time").select("18:30", { force: true });
	cy.get("#party").select("2", { force: true });
	cy.get(".bookBtn").scrollIntoView().click({ force: true });
});
