describe('Search Functionality Test', () => {
    it('automatically inputs a value and searches', () => {
        cy.visit('https://wondrous-donut-cfa916.netlify.app/')
        cy.get('[data-testid="search-input"]').type('Bitcoin');
        cy.get('[data-testid="search-button"]').click();
    });
});
