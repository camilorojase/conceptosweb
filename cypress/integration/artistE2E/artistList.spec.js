
describe('Verificar toda la gestión de exhibiciones por museo', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:4200/');
    cy.get('a[routerlink="/artists"]', { timeout: 10000 }).last().click();
  })
  it('Debe existir zona para listar exhibiciones', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    cy.get('#artistlist>li', { timeout: 10000 }).should('to.exist');
    // and then perform an assertion with `should`.
  })

})
