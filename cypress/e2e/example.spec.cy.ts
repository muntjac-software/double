describe('Example', () => {

  specify('should have a non-empty header', () => {
    cy.get('header').should('not.be.empty');
  });

})
