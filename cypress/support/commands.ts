/// <reference types="cypress" />

Cypress.Commands.add('visitAsHtml', (route: string) => {
    cy.request(route)
      .its('body')
      .then((html: string) => {
        html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
        cy.document().invoke('open');
        cy.document().invoke('write', html);
        cy.document().invoke('close');
      });
  });
  
  export {}; // Ensure this file is treated as a module
  
  declare global {
    namespace Cypress {
      interface Chainable<Subject = any> {
        visitAsHtml(route: string): Chainable<void>;
      }
    }
  }
  