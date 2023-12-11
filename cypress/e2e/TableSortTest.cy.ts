describe('Table Sorting Test', () => {
    it('successfully checks table sorting', () => {
        cy.visit('https://wondrous-donut-cfa916.netlify.app/')
        cy.screenshot('table-sorting/mainPage')

        cy.checkTableSorting({columnName: '#', expectedOrder: '▼'});
        cy.screenshot('table-sorting/rank-down')
        cy.checkTableSorting({columnName: '#', expectedOrder: '▲'});
        cy.screenshot('table-sorting/rank-up')

        cy.checkTableSorting({columnName: 'Price', expectedOrder: '▲'});
        cy.screenshot('table-sorting/price-up')
        cy.checkTableSorting({columnName: 'Price', expectedOrder: '▼'});
        cy.screenshot('table-sorting/price-down')

        cy.checkTableSorting({columnName: '24h%', expectedOrder: '▼'});
        cy.screenshot('table-sorting/percent-down')
        cy.checkTableSorting({columnName: '24h%', expectedOrder: '▲'});
        cy.screenshot('table-sorting/percent-up')

        cy.checkTableSorting({columnName: 'Market Cap', expectedOrder: '▼'});
        cy.screenshot('table-sorting/market-cap-down')
        cy.checkTableSorting({columnName: 'Market Cap', expectedOrder: '▲'});
        cy.screenshot('table-sorting/market-cap-up')
    });
});
