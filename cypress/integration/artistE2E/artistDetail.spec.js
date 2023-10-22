
describe('Verificar toda la gestión de exhibiciones por museo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
    cy.get('a[routerlink="/artists"]', { timeout: 10000 }).last().click();
    cy.get('#artistlist>li', { timeout: 10000 }).eq(1).click();
  })

  it('Debe existir una barra de navegacion para el artista', () => {
    cy.get('div.navbar-light', { timeout: 10000 }).should('to.exist');
    cy.get('#buttonnewartist', { timeout: 10000 }).should('to.contain', 'New');
    cy.get('#buttoneditartist', { timeout: 10000 }).should('to.contain', 'Edit');
    cy.get('#buttondeleteartist', { timeout: 10000 }).should('to.contain', 'Delete');
  })

  it('Debe tener los elementos detalle del artista', () => {
    cy.get('#headerlistdetail', { timeout: 10000 }).should('to.exist');
    cy.get('#titlebirthate', { timeout: 10000 }).should('to.contain', 'Birthdate');
    cy.get('#titlebirthplace', { timeout: 10000 }).should('to.contain', 'Birthplace');
    cy.get('#titlemovements', { timeout: 10000 }).should('to.contain', 'Movements');
    cy.get('#titleartworks', { timeout: 10000 }).should('to.contain', 'Artworks');
  })

  it('Debe tener los elementos de redireccion a crear componentes', () => {
    cy.get('#btnnewmovement', { timeout: 10000 }).should('to.contain', 'New Movement');
    cy.get('#btnaddmovement', { timeout: 10000 }).should('to.contain', 'Add Movement');
    cy.get('#btnnewartwork', { timeout: 10000 }).should('to.contain', 'New Artwork');
  })

  it('Debe tener las lista de movimientos y obras de arte', () => {
    cy.get('#accordionMovements', { timeout: 10000 }).should('to.exist');
    cy.get('#accordionArtworks', { timeout: 10000 }).should('to.exist');
  })

})
