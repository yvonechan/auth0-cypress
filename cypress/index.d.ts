declare namespace Cypress {
  interface Chainable<Subject = any> {
    loginToAuth0(username: string, password: string): Chainable<any>
  }
}
interface ImportMetaEnv {
  VITE_PORT?: string
  VITE_AUTH_TOKEN?: string
}
