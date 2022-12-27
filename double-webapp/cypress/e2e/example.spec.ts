describe('Example', () => {

  specify('should have a non-empty title', () => {
    cy.visit('/')
    cy.get('div #wow-list').should('not.be.empty');
  });

})
