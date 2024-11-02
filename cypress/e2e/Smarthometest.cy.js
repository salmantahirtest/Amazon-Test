describe('Smart Home Tests', () => {
    it('Checks total displayed number of results for Televisions', () => {
      cy.visit('https://www.amazon.com');
      // Navigate through categories

      //click on hamburger icon
      cy.get('.hm-icon').click();
      //Click on Smart Home
      cy.get('.hmenu-visible > :nth-child(9) > .hmenu-item').click();
      //Click on Home entertainment
      cy.get('.hmenu-visible > :nth-child(12) > .hmenu-item').click();
      //Click on Televisions
      cy.get(':nth-child(1) > .bxc-grid__content > .bxc-grid__image > a > img').click();
      });
    });