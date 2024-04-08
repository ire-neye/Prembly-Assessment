describe('Sauce Demo Sorting Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/');
  
      // User Login
      cy.get('[data-test="username"]').type('standard_user'); // Assert username field is visible
      cy.get('[data-test="password"]').type('secret_sauce'); // Assert password field is visible
      cy.get('[data-test="login-button"]').click(); // Assert login button is visible and clickable
    });
    
    // Creating a function to help check sorting results  
    const verifySorting = (sortOption, expectedOrder) => {
        cy.get('.product_sort_container').select(sortOption);
    
        cy.get('.inventory_item_name').then($names => {
          // Gets all product names from the website
          const productNames = $names.toArray().map(name => name.innerText);
          
          // Compares the website;s order to the expected order
          expect(productNames).to.deep.equal(expectedOrder);
        });
      };
    
      it('should verify Name (A -> Z) sorting', () => {
        cy.get('.inventory_item_name').then($names => {
          // Gets the original order of the product names
          const originalOrder = $names.toArray().map(name => name.innerText);
          
          // Creates a sorted copy of the orginal order
          const sortedNames = originalOrder.slice().sort(); // Slice to create a copy
          
          // Uses the helper function to tell the store to sort A-Z and compares the results
          verifySorting('az', sortedNames);
        });
      });
    
      it('should verify Name (Z -> A) sorting', () => {
        cy.get('.inventory_item_name').then($names => {
          // Gets the original order of product names
          const originalOrder = $names.toArray().map(name => name.innerText);
          
          // Creates a reversed copy of the original order
          const sortedNames = originalOrder.slice().sort().reverse(); // Slice to create a copy
          
          // Uses the helper function to tell the store to sort Z-A and compares the results
          verifySorting('za', sortedNames);
        });
      });
    });