describe('Data Load Test', () => {
    it('successfully loads and displays coins data', () => {
        cy.visit('https://wondrous-donut-cfa916.netlify.app/');

        cy.get('[data-testid="header-coin-card"]').each((card) => {
            const text = card.text();
            console.log(text)
            expect(text).not.to.match(/NaN|undefined|^0$/);
        });


        // ��������� ������� ������ � �������
        cy.get('table').find('tr').should('have.length.at.least', 1);
        cy.get('table').find('td').each(($td) => {
            const text = $td.text();
            expect(text).not.to.match(/NaN|undefined|^0$/);
        });

        // ���������, ��� ��������� ������� ������������
        cy.get('.pagination').should('contain.text', '1');

        // ���������� �������� ������� ��������
       // cy.matchImageSnapshot('homepage');
    });
});
