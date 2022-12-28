describe('Menu Section', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should change element visibility when menu is toggled', () => {
    // given
    cy.get('header > #tag-line').should('have.css', 'opacity', '0');

    // when
    cy.get('#menu').click();
    cy.pause();

    // then
    cy.get('header > #tag-line').should('not.have.css', 'opacity', '0');

    // when
    cy.get('#menu').click();
    cy.pause();

    // then
    cy.get('header > #tag-line').should('have.css', 'opacity', '0');

  });

})
