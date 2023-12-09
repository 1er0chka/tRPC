declare namespace Cypress {
    interface TableSortingParams {
        columnName: string;
        expectedOrder: '▼' | '▲';
    }

    interface Chainable<Subject> {
        checkCoinsTable(): Chainable<void>
        checkPopularCoins(): Chainable<void>
        checkPagination(): Chainable<void>
        checkTableSorting(params: TableSortingParams): Chainable<void>
        checkPortfolioCoins(): Chainable<void>
        checkAddCoinModal(): Chainable<void>
        checkCoinPageData(): Chainable<void>
    }
}