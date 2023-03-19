describe('Server side rendering', () => {
    const baseUrl: string = Cypress.config('baseUrl') ?? '/';

    it('should serve statics and favicon.ico', () => {
        cy.request(`${baseUrl}/favicon.ico`).its('status').should('equal', 200);
    });
});
