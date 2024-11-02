describe('Details of Product Tests', () => {
    it('Verifies product details Apple products', () => {
      cy.visit('https://www.amazon.com');
  
      // Search for "Apple" in the Electronics category
      cy.xpath('//*[@id="twotabsearchtextbox"]').type('Apple{enter}');
      
      // Click on the first product
      cy.xpath('//*[@id="search"]//h2/a/span').first().click();
  
      // Verify product details
      cy.contains('cannot be shipped').then(($element) => {
            if ($element.length > 0) { // If the text is found
              cy.log('Product is not available. Navigating back.');
              cy.go('back'); // Navigate back to the previous page
            } else {
              cy.log('Text "Currently Unavailable" not found. Proceeding with further actions.');
              cy.visit('https://www.amazon.com/Dooplat-Magnetic-Wireless-Charging-Multiple/dp/B0DFQ5C32R/ref=sr_1_6?dib=eyJ2IjoiMSJ9.kpUers3qGNKOJRM5UU3iZbBXT9u13Y-go6ufwN13IoFDQv8oYyZlWnTClp6fUKYIIU3a5WydumgJctc5MuKDC4mVNBmwimYNLPzSptFXcxYZxjmydDN7MRDoBFWVkagcMYwpwnWFuGuwCe11lLs2wdOvQvAbXDApAtpq68auUm0DR9LOFrk0S1uR1NrUSkPnvnEKYRAeiTv1BUydSAsO1xsXG8yhmFi7ZLqo41-Nafo.aPhPNBXUbew1udBIfEGtUiUdzd66FmSneKKhaNl4va0&dib_tag=se&keywords=apple&qid=1730483488&sr=8-6&th=1');
              cy.get('#add-to-cart-button').click();
            }
          });
        });
      });
      
      
      // Add to cart and verify success message
      //cy.get('#add-to-cart-button').click();
      //cy.get('#huc-v2-order-row-confirm-text').should('contain.text', 'Added to Cart');
    