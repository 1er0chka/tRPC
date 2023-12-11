describe('Modal Add Coin Test', () => {
    it('successfully opens and displays portfolio information', () => {
        cy.visit('https://wondrous-donut-cfa916.netlify.app/')

        cy.get('[data-testid="modal-add-coin"]').should('not.exist');
        cy.get('[data-testid="coins-table"]').find('[data-testid="coins-table-row"]').should('have.length.at.least', 1)
        cy.screenshot('modal-add-coin/mainPage')
        cy.get('[data-testid="coins-table"]').find('[data-testid="coin-buy-button"]').first().click();

        cy.get('[data-testid="modal-add-coin"]').should('exist').and('be.visible');
        cy.checkAddCoinModal()
        cy.screenshot('modal-add-coin/modal')
    });
});
