import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I click text {string}", (text) => {
    cy.contains(text).click();
});

Then("I click label for {string}", (text) => {
    cy.contains('label', text).click();
});
