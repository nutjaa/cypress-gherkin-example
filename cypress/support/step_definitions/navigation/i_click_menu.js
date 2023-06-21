import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I click menu {string}", (title) => {
    cy.get('a.menu-link span').filter(`:contains("${title}")`).click()
});
