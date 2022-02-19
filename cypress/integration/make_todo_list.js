/* eslint-disable no-undef */
describe('make a todo list', () => {
    it('display the todo list', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="form-input"]')
            .type('Buy milk');

        cy.get('[data-testid="form-button"]')
            .click();

        cy.get('[data-testid="form-input"]')
            .should('have.value', '');

        cy.contains('Buy milk');

        cy.get('[data-testid="delete-button"]')
            .click();

        cy.get('[data-testid="list-item"]')
            .should('not.exist');

    });
});