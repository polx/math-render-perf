describe('Medium ML - Verify All Elements', () => {
  it('Measure time for ML Medium Component', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });


    const startTime = performance.now();
    cy.visitAsHtml('http://localhost:4000/mathML/medium'); // Update this with the correct URL

    // Wait for all 64 elements to have content
    for (let i = 2; i <= 23; i++) {
      const elementId = `#me${i}`;

      // Ensure the element exists and has content
      cy.get(elementId).should('exist');
      cy.get(elementId).should(($el) => {
        const htmlContent = $el.html().trim();
        expect(htmlContent).not.to.be.empty; // Ensure content is rendered
      });
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
