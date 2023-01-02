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
    cy.get('#tag-line').should('have.css', 'animation-name', 'none');

    // When: menu is first expanded
    cy.get('#menu-button').click();

    // Then: tag line should be visible & expanded title variant displayed
    cy.get('#title-initial').should('have.css', 'display', 'none');
    cy.get('#title-expanded').should('have.css', 'display', 'block');
    cy.get('#title-closed').should('have.css', 'display', 'none');

    cy.wait(1000); // wait for fadeIn animation
    cy.get('#tag-line').should('have.css', 'opacity', '0.8');

    // When: menu is closed
    cy.get('#menu-button').click();

    // Then: tag line should be hidden again & closed title variant displayed
    cy.get('#title-initial').should('have.css', 'display', 'none');
    cy.get('#title-expanded').should('have.css', 'display', 'none');
    cy.get('#title-closed').should('have.css', 'display', 'block');

    cy.wait(1000); // wait for fadeOut animation
    cy.get('#tag-line').should('have.css', 'opacity', '0');

  });

  it('should change the visibility of side menu-bar elements when the menu is toggled', () => {
    let rem = 12;
    let width_menu_initial = `${5 * rem}px`;
    let width_menu_expanded = `${20 * rem}px`;

    let bright = '0.8';
    let faint = '0.2';
    let hidden = '0';
    // TODO: import from scss?

    // Given: verify initial state
    cy.get('menu-bar > section').should('have.css', 'width', width_menu_initial);
    cy.get('menu-bar > section > .menu-item > .menu-item-header > p > fa-icon').should('have.css', 'opacity', faint);
    cy.get('menu-bar > section > .menu-item > .menu-item-header > span').should('have.css', 'opacity', hidden);
    cy.get('menu-bar > section > .menu-item > .menu-item-body > ol, p').should('have.css', 'opacity', hidden);

    // When: menu is first expanded
    cy.get('#menu-button').click();

    // Then: menu width should be expanded, icons more visible and header and body content faded in
    cy.get('menu-bar > section').should('have.css', 'width', width_menu_expanded);
    cy.get('menu-bar > section > .menu-item > .menu-item-header > p > fa-icon').should('have.css', 'opacity', bright);
    cy.get('menu-bar > section > .menu-item > .menu-item-header > span').should('have.css', 'opacity', bright);
    cy.get('menu-bar > section > .menu-item > .menu-item-body > ol, p').should('have.css', 'opacity', bright);

    // When: menu is closed
    cy.get('#menu-button').click();

    // Then: menu should return to initial state
    cy.get('menu-bar > section').should('have.css', 'width', width_menu_initial);
    cy.get('menu-bar > section > .menu-item > .menu-item-header > p > fa-icon').should('have.css', 'opacity', faint);
    cy.get('menu-bar > section > .menu-item > .menu-item-header > span').should('have.css', 'opacity', hidden);
    cy.get('menu-bar > section > .menu-item > .menu-item-body > ol, p').should('have.css', 'opacity', hidden);

  });

  it('should switch to the new difficulty when one is selected', () => {
    // Given: verify initial state
    cy.get('#menu-button').click();

    cy.get('#diff-0').should('have.class', 'active');

    cy.get('#diff-1').should('have.not.class', 'active');
    cy.get('#diff-2').should('have.not.class', 'active');
    cy.get('#diff-3').should('have.not.class', 'active');

    // When: new difficulty is selected
    cy.get('#diff-1').click();

    // Then: active difficulty is switched
    cy.get('#diff-1').should('have.class', 'active');

    cy.get('#diff-0').should('have.not.class', 'active');
    cy.get('#diff-2').should('have.not.class', 'active');
    cy.get('#diff-3').should('have.not.class', 'active');

    // TODO: this test could be improved...
  })

})
