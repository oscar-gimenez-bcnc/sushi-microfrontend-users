describe('UsersTable spec', () => {
  it('should show a loader meanwhile data is fetched', () => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', (req) => {
      req.on('response', (res) => {
        res.setDelay(10000);
      });
    });
    cy.visit('http://localhost:9001/');
    cy.get('.loading.loading-spinner').should('be.visible');
  });

  it('should show 10 users when data is fetched', () => {
    cy.visit('http://localhost:9001/');
    cy.get('.loading.loading-spinner').should('not.exist');
    cy.get('tbody tr').should('have.length', 10);
  });
});
