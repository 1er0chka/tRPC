const checkTextContent = (text: string) => {
    expect(text).not.to.be.empty
    expect(text).not.to.match(/NaN|undefined/)
};

const checkNumericContent = (text: string, checkForZero = true) => {
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
        checkNumericContent(getText(tr, 'coin-#'))
        checkTextContent(getText(tr, 'coin-name'))
        checkTextContent(getText(tr, 'coin-symbol'))
        checkNumericContent(getText(tr, 'coin-Price'))
        checkNumericContent(getText(tr, 'coin-24h%'), false)
        checkNumericContent(getText(tr, 'coin-Market Cap'))
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

Cypress.Commands.add('checkTableSorting', ({columnName, expectedOrder}) => {
    cy.get('[data-testid="coins-table"]').find('[data-testid="coins-table-row"]').should('have.length.at.least', 1)

    cy.get(`[data-testid="table-header-${columnName}"]`).click();
    cy.get(`[data-testid="table-header-${columnName}"]`).invoke('text').should('eq', `${columnName} ${expectedOrder}`);

    let prevData: number = 0
    cy.get('[data-testid="coins-table"]').find('[data-testid="coins-table-row"]')
        .first().then((row) => {
        prevData = parseFloat(getText(row, `coin-${columnName}`).replace(/[$,]/g, ''))
    });

    if (expectedOrder === '▼') {
        cy.get('[data-testid="coins-table"]').find('[data-testid="coins-table-row"]').each((tr) => {
            const number: number = parseFloat(getText(tr, `coin-${columnName}`).replace(/[$,]/g, ''))
            expect(prevData).to.be.at.gte(number)
            prevData = number
        })
    } else {
        cy.get('[data-testid="coins-table"]').find('[data-testid="coins-table-row"]').each((tr) => {
            const number: number = parseFloat(getText(tr, `coin-${columnName}`).replace(/[$,]/g, ''))
            expect(number).to.be.at.gte(prevData)
            prevData = number
        })
    }
})

Cypress.Commands.add('checkPortfolioCoins', () => {
    const portfolio = localStorage.getItem("portfolio");
    if (portfolio) {
        cy.get('[data-testid="portfolio-modal"]').find('[data-testid="modal-portfolio-coin"]').each((coin) => {
            checkTextContent(getText(coin, 'modal-portfolio-coin-name'));
            checkNumericContent(getText(coin, 'modal-portfolio-coin-price'));
            checkNumericContent(getText(coin, 'modal-portfolio-coin-difference'), false);
        })
    }

    cy.get('[data-testid="modal-portfolio-coin-delete-button"]').click()
})

const addCoin = (elem: JQuery<HTMLElement>) => {
    const coinNumber: number = 1

    cy.get('[data-testid="modal-add-coin"]').then((modal) => {
        checkTextContent(getText(modal, "coin-name"))
        checkNumericContent(getText(modal, "coin-price"))
        expect(elem.find('[data-testid="coin-Price"]').text()).to.equal(modal.find('[data-testid="coin-price"]').text());
        checkNumericContent(getText(modal, 'amount'), false)

        cy.get('[data-testid="coin-number"]').type(coinNumber + '').then(() => {
            const amount = (parseFloat(getText(modal, 'coin-price').replace(/[$,]/g, '')) * coinNumber).toFixed(2)
            expect(parseFloat(getText(modal, 'amount').replace(/[$,]/g, '')).toFixed(2)).to.equal(amount)

            cy.get('[data-testid="modal-add-coin-buy-button"]').click().then(() => {
                cy.get('[data-testid="portfolio"]').then((portfolio) => {
                    expect(parseFloat(getText(portfolio, 'portfolio-sum').replace(/[$,]/g, ''))).to.equal(parseFloat(amount))
                })
            })
        })
    })


}

Cypress.Commands.add('checkAddCoinModal', () => {
    cy.get('[data-testid="coins-table"]').find('[data-testid="coins-table-row"]').first().then((elem) => {
        addCoin(elem)
    })
})

Cypress.Commands.add('checkCoinPageData', () => {
    cy.get('[data-testid="coin"]').then((coin) => {
        checkNumericContent(getText(coin, 'coin-rank'))
        checkTextContent(getText(coin, 'coin-name'))
        checkTextContent(getText(coin, 'coin-symbol'))

        cy.get('[data-testid="coin-buy-button"]').click()
        addCoin(coin)
    })
})



