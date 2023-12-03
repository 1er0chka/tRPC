describe('Search Functionality Test', () => {
    it('automatically inputs a value and searches', () => {
        cy.visit('https://wondrous-donut-cfa916.netlify.app/')
        cy.get('[data-testid="search-input"]').type('Bitcoin');
        cy.get('[data-testid="search-button"]').click();

        // Здесь можете добавить логику проверки результатов поиска.
        // Например, проверить, что результаты появились на странице.
        // TODO: Добавьте свои проверки здесь.
    });
});
