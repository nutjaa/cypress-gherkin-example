import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I not include Switzerland", () => {
    cy.get('label[for="input-radio-includeSwitzerland-1"]').click();
});

Then("I change number of travelers to {string}", (totalTravels) => {
    cy.get('#update-travelers-count-input').focus().clear().type(totalTravels).blur()
});

Then("I click create trip", () => {
    cy.get('#submit-button').click()
})

Then("I see traveler {string} pax number with some value", (index) => {
    cy.get(`#traveler-cell-traveler-${index}-pax-number-venice`).should('exist');
    cy.get(`#traveler-cell-traveler-${index}-pax-number-venice`).should('not.be.empty')
});