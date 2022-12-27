describe('Example', () => {

  specify('should have a non-empty title', () => {
    cy.visit('/')
    cy.get('#app-title').should('not.be.empty');
  });

})
