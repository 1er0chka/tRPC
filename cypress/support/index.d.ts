declare namespace Cypress {
    interface Chainable<Subject> {
        checkCoinsTable(): Chainable<void>
        checkPopularCoins(): Chainable<void>
        checkPagination(): Chainable<void>
    }
}