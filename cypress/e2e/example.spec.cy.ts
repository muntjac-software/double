describe('Example', () => {

  specify('should have a non-empty title', () => {
    cy.get('#app-title').should('not.be.empty');
  });

})
