describe('Search Functionality Test', () => {
    it('automatically inputs a value and searches', () => {
        const searchRequest = 'bitcoin'

        cy.visit('https://wondrous-donut-cfa916.netlify.app/')

        cy.get('[data-testid="coins-table-row"]').should('have.length.at.least', 1)
        cy.screenshot('search/mainPage')

        cy.get('[data-testid="search-input"]').type(searchRequest)
        cy.screenshot('search/requestTyped')

        cy.intercept('POST', 'https://trpc-server-38lb.onrender.com/coincap/coins.getSearchResult').as('searchResults');
        cy.get('[data-testid="search-button"]').click()
        cy.wait('@searchResults');
        cy.checkCoinsTable()
        cy.get('[data-testid="coins-table"]').find('[data-testid="coins-table-row"]').each((tr) => {
            const re = new RegExp(searchRequest, 'i');
            expect(tr.find(`[data-testid="coin-name"]`).text().trim()).to.match(re);
        });
        cy.screenshot('search/result')
    });
});
