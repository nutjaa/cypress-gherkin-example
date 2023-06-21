import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I login as {string} {string}", (division, role) => {
    cy.visit("/");

    if (division == "venice" && role == "conceierge") {
        cy.get('.set-token-link').first().click();
    }
});
