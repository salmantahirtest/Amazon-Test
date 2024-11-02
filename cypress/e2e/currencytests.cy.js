describe('Currency Test', () => {
    it('Checks if currency selection displays correctly', () => {
      cy.visit('https://www.amazon.com/customer-preferences/edit?ie=UTF8&ref_=footer_cop&preferencesReturnUrl=%2Fgp%2Fcss%2Fhomepage.html%3Fref_%3Dnav_youraccount_btngp%2Fcss%2Fhomepage.html');
  
      // Change currency to AED
      cy.get('#icp-currency-dropdown-selected-item-prompt > .a-button-inner > .a-button-text').click();
      cy.get('#icp-currency-dropdown_23 > :nth-child(1)').click();
      cy.wait(2000);
      cy.get('#icp-save-button > .a-button-inner > .a-button-input').click({ force: true });
      cy.wait(2000);
      cy.get('#nav-logo-sprites').click({ force:true});
      cy.wait(2000);
  
    //Check if prices are displayed in AED
    cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]').click({ force:true});
    cy.wait(1000);
    cy.get('.dui-truncate-3 > .a-truncate > .a-truncate-cut').click({ force:true});
    cy.contains('AED');

      });
    });
  