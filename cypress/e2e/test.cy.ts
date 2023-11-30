describe('Coins Main Page', () => {
    it('successfully loads and displays cryptocurrency data', () => {
        cy.visit('https://wondrous-donut-cfa916.netlify.app/');
        cy.contains('Today`s Cryptocurrency Prices').should('be.visible');
        cy.get('table').find('tr').should('have.length.at.least', 1);

        cy.matchImageSnapshot('homepage'); // TODO: doesn't work
    });

    // Additional tests for sorting, searching, etc. would follow here
});
