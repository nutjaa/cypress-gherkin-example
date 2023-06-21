import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I navigate to {string}", (url) => {
    cy.url().should('include', url)
});

Then("I reload page", () => {
    cy.reload();
});