describe('renders the homepage', () => {
  it('shows the homepage', () => {
    cy.visit('/create')
    
    cy.get('fixed-top-half').should("be.visible")
  });
});
