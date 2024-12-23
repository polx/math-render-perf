describe('Small CSS - Verify All Elements', () => {
  it('Measure time for CSS Small Component', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });


    const startTime = performance.now();
    cy.visitAsHtml('http://localhost:4000/mathJaxCss/small'); // Update this with the correct URL

    // Wait for all 64 elements to have content
    for (let i = 1; i <= 2; i++) {
      const elementId = `#me${i}`;

      // Ensure the parent element exists
      cy.get(elementId).should('exist');

      // Ensure it contains the `<mjx-container>` element
      cy.get(elementId).find('mjx-container').should('exist');
    }

    // Once all elements are checked, calculate the total time
    cy.window().then(() => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      const text = `Time to render all MathJax elements: ${renderTime.toFixed(2)} ms`;
      console.log(text);
      cy.log(text);
    });
    
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
  });
});
