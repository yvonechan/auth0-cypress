// https://on.cypress.io/api

describe('Login', () => {
  it('Visits the Main Page', () => {
    cy.visit('/')
    cy.get('button').contains('Login').click()
    cy.loginToAuth0(Cypress.env('auth0_username'), Cypress.env('auth0_password'))
  })
})
