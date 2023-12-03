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
    }
};

const getText = (element: JQuery<HTMLElement>, testId: string) => {
    return element.find(`[data-test-id="${testId}"]`).text().trim()
}


describe('Data Load Test', () => {
    it('successfully loads and displays coins data', () => {
        cy.visit('https://wondrous-donut-cfa916.netlify.app/')

        cy.get('[data-testid="header-coin-card"]').each((card) => {
            checkTextContent(getText(card, 'coin-name'))
            checkTextContent(getText(card, 'coin-symbol'))
            checkNumericContent(getText(card, 'coin-price'))
        });

        // Проверяем наличие данных в таблице
        cy.get('table').find('tr').should('have.length.at.least', 1);
        cy.get('table').find('td').each(($td) => {
            const text = $td.text();
            expect(text).not.to.match(/NaN|undefined|^0$/);
        });

        // Проверяем, что нумерация страниц отображается
        cy.get('.pagination').should('contain.text', '1');

        // Визуальная проверка главной страницы
       // cy.matchImageSnapshot('homepage');
    });
});
