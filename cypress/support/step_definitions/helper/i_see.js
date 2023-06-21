import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I see {string}", (selector) => {
    cy.get(selector).should('exist');
});

Then("I see text {string}", (text) => {
    cy.contains(text).should('exist');
});

Then("I wait until not see text {string}", (text) => {
    cy.contains(text, {timeout:10000}).should('not.exist');
})