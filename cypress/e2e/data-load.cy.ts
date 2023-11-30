describe('Data Load Test', () => {
    it('successfully loads and displays coins data', () => {
        cy.visit('https://wondrous-donut-cfa916.netlify.app/');

        // ��������� ��� ��������� ���������� - ��� ����� �� ��� � �� ����, ��� ������� undefind � ��
        cy.get('.header-coin-card').each(($coin) => {
            const text = $coin.text();
            expect(text).not.to.match(/NaN|undefined|^0$/);
        });

        // ��������� ��� ��������� ������� - ���� �� 1 �������, ��� ���� ����� ��� undefind ��� ����� � ��
        // ��������� ��� � ��������� �������� ���� �����-�� ����� ���������


        cy.matchImageSnapshot('homepage'); // TODO: doesn't work
    });

});
