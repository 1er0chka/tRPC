describe('Modal Portfolio Test', () => {
    it('successfully opens and displays portfolio information', () => {
        cy.visit('https://wondrous-donut-cfa916.netlify.app/')
        cy.get('[data-testid="modal-add-coin"]').should('not.exist');
        cy.get('[data-testid="coins-table"]').find('[data-testid="coins-table-row"]').should('have.length.at.least', 1)
        cy.get('[data-testid="coins-table"]').find('[data-testid="coin-name"]').first().click();

        cy.checkPopularCoins()
        cy.checkCoinPageData()
    })
})
