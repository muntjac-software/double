describe('Menu Bar', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should change the visibility of top menu-bar elements when menu is toggled', () => {

    // Given: verify initial state
    cy.get('#title-initial').should('have.css', 'display', 'block');
    cy.get('#title-expanded').should('have.css', 'display', 'none');
    cy.get('#title-closed').should('have.css', 'display', 'none');

    cy.get('#tag-line').should('have.css', 'opacity', '0');

    // When: menu is first expanded
    cy.get('#menu-button').click();

    // Then: tag line should be visible & expanded title variant displayed
    cy.get('#title-initial').should('have.css', 'display', 'none');
    cy.get('#title-expanded').should('have.css', 'display', 'block');
    cy.get('#title-closed').should('have.css', 'display', 'none');

    // cy.get animation length and cy.wait that time before assertion?
    // cy.get('#tag-line').should('have.css', 'opacity', '.8'); // TODO: handle fadeIn animation?

    // When: menu is closed
    cy.get('#menu-button').click();

    // Then: tag line should be hidden again & closed title variant displayed
    cy.get('#title-initial').should('have.css', 'display', 'none');
    cy.get('#title-expanded').should('have.css', 'display', 'none');
    cy.get('#title-closed').should('have.css', 'display', 'block');

    cy.get('#tag-line').should('have.css', 'opacity', '0');

  });

  // #1 - TODO: handle fadeIn animation?
  // #2- TODO: move on the refactor and test of the side menu bar elements...

})
