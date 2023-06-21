import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I select date range today", (text) => {
    cy.get('.CalendarDay__today').click();
});


