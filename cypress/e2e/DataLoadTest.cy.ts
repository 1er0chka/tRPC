describe('Data Load Test', () => {
    it('successfully loads and displays coins data', () => {
        cy.visit('https://wondrous-donut-cfa916.netlify.app/')
        cy.checkPopularCoins()
        cy.checkCoinsTable()
        cy.checkPagination()
    });
});
