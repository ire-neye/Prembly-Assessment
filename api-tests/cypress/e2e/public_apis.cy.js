// Describe block for suite
describe('Public APIs Test', () => {
  
  it('should fetch APIs and filter by Authentication & Authorization', () => { 
    //Test case to find APIs and filter by Autheication & Authorization   
    
    cy.request('https://api.publicapis.org/entries') //Send a request to the API's endpoint
      .then((response) => {
        //API response handling
        
        expect(response.status).to.eq(200);
        //Assert the response status is 200

        const authAPIs = response.body.entries.filter(entry => entry.Category === 'Authentication & Authorization');
        // Filters API entries to only include those with the 'Authentication & Authorization' category  

        expect(authAPIs.length).to.be.greaterThan(0, 'Authentication & Authorization APIs were found');
        // Asserts that at least one API entry matching the category was found 
      });
  });
});