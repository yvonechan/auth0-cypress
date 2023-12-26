// https://on.cypress.io/api
import { loginToAuth0 } from '../support/auth-provider-commands/auth0'

describe('Login', () => {
  it('Visits the Main Page', () => {
    cy.visit('/')
    cy.get('button').contains('Login').click()
    loginToAuth0(Cypress.env('auth0_username'), Cypress.env('auth0_password'))
  })
})
