describe('Table Sorting Test', () => {
    it('successfully checks table sorting', () => {
        cy.visit('https://wondrous-donut-cfa916.netlify.app/')

        cy.checkTableSorting({columnName: '#', expectedOrder: '▼'});
        cy.checkTableSorting({columnName: '#', expectedOrder: '▲'});

        cy.checkTableSorting({columnName: 'Price', expectedOrder: '▲'});
        cy.checkTableSorting({columnName: 'Price', expectedOrder: '▼'});

        cy.checkTableSorting({columnName: '24h%', expectedOrder: '▼'});
        cy.checkTableSorting({columnName: '24h%', expectedOrder: '▲'});

        cy.checkTableSorting({columnName: 'Market Cap', expectedOrder: '▼'});
        cy.checkTableSorting({columnName: 'Market Cap', expectedOrder: '▲'});
    });
});
