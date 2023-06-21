import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I click {string}", (selector) => {
    cy.get(selector).click()
});
