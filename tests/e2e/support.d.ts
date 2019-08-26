declare namespace Cypress {
  interface Chainable<Subject> {
    login(): Chainable<Subject>
    resetDb(): Chainable<Subject>
  }
}
