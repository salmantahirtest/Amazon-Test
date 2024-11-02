describe('Deals Tests', () => {
    it('Checks filter by department on Deals page', () => {
      cy.visit('https://www.amazon.com');
  
      //Go to Today Deals
      cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]').click({ force:true});
      cy.wait(1000);
  
      // Expand Departments filter and select "Software"
      cy.get('.SeeMoreButton-module__container_j2YuDOVGk8QHFxg6xPQk > .a-size-base').click({force:true});
      cy.get('[data-testid="filter-departments-491286"] > label').click({force:true});
  
      // Validate correct department selection
      cy.get('[data-testid="filter-departments-Software"]').should('contain.text', 'Software');
    });
  });