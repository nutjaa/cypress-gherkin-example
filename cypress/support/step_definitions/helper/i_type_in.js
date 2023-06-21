import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I type {string} in {string}", (text, selector) => {
    cy.get(selector).type(text);
});
