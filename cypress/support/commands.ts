const checkTextContent = (text: string) => {
    expect(text).not.to.be.empty
    expect(text).not.to.match(/NaN|undefined/)
};

const checkNumericContent = (text: string,  checkForZero = true) => {
    expect(text).not.to.be.empty
    expect(text).not.to.match(/NaN|undefined/)
    if (checkForZero) {
        expect(text).not.to.equal('$0')
        expect(text).not.to.equal('$0.00')
        expect(text).not.to.equal('0')
        expect(text).not.to.equal('0.00')
    }
};

const getText = (element: JQuery<HTMLElement>, testId: string) => {
    return element.find(`[data-testid="${testId}"]`).text().trim()
}

Cypress.Commands.add('checkPopularCoins', () => {
    cy.get('[data-testid="header-coin-card"]').each((card) => {
        checkTextContent(getText(card, 'coin-name'))
        checkTextContent(getText(card, 'coin-symbol'))
        checkNumericContent(getText(card, 'coin-price'))
    });
})

Cypress.Commands.add('checkCoinsTable', () => {
    cy.get('[data-testid="coins-table"]').find('[data-testid="coins-table-row"]').should('have.length.at.least', 1)
    cy.get('[data-testid="coins-table"]').find('[data-testid="coins-table-row"]').each((tr) => {
        checkNumericContent(getText(tr, 'coin-id'))
        checkTextContent(getText(tr, 'coin-name'))
        checkTextContent(getText(tr, 'coin-symbol'))
        checkNumericContent(getText(tr, 'coin-price'))
        checkNumericContent(getText(tr, 'coin-change'), false)
        checkNumericContent(getText(tr, 'coin-market-cup'))
    });
});

Cypress.Commands.add('checkPagination', () => {
    cy.get('[data-testid="coins-table-pagination"]').then((pagination) => {
        const paginationText = pagination.text()
        checkTextContent(paginationText)
        const numbers = paginationText.split(' - ').map(text => parseInt(text, 10))
        expect(numbers).to.have.length(2)
        expect(numbers[0]).to.be.at.least(0)
        expect(numbers[1]).to.be.at.least(0)
        expect(numbers[0]).to.be.at.gte(numbers[1])
    });
})