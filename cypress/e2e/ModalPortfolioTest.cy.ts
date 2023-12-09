describe('Modal Portfolio Test', () => {
    it('successfully opens and displays portfolio information', () => {
        cy.visit('https://wondrous-donut-cfa916.netlify.app/')

        cy.get('[data-testid="portfolio-modal"]').should('not.exist');
        cy.get('[data-testid="portfolio"]').click();
        cy.get('[data-testid="portfolio-modal"]').should('exist').and('be.visible');

        cy.checkPortfolioCoins()
    });
});
