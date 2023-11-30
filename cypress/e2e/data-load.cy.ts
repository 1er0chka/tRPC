describe('Data Load Test', () => {
    it('successfully loads and displays coins data', () => {
        cy.visit('https://wondrous-donut-cfa916.netlify.app/');

        // проверить что по€вились попул€рные - что сумма не нан и не ноль, что никаких undefind и тп
        cy.get('.header-coin-card').each(($coin) => {
            const text = $coin.text();
            expect(text).not.to.match(/NaN|undefined|^0$/);
        });

        // проверить что по€вилась таблица - хот€ бы 1 элемент, при этом нигде нет undefind нан нулей и тд
        // проверить что в нумерации страницы тоже какие-то цифры по€вились


        cy.matchImageSnapshot('homepage'); // TODO: doesn't work
    });

});
