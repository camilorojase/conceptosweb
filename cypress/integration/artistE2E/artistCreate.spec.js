
describe('Verificar toda la gestión de exhibiciones por museo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
    cy.get('a[routerlink="/artists"]', { timeout: 10000 }).last().click();
  })
  it('Debe tener los elementos necesarios para creación de un artista', () => {
    cy.get('#artistlist>li', { timeout: 10000 }).eq(1).click();
    cy.get('#buttonnewartist', { timeout: 10000 }).click({force: true});
    cy.get('#btncreateartist', { timeout: 10000 }).should('to.contain', 'Create');
    cy.get('#btnclearartist', { timeout: 10000 }).should('to.contain', 'Clear');
    cy.get('#btncancel', { timeout: 10000 }).should('to.contain', 'Cancel');
    cy.get('#name', { timeout: 10000 }).should('to.exist');
    cy.get('#country', { timeout: 10000 }).should('to.exist');
    cy.get('#country', { timeout: 10000 }).select(0, {force: true});
    cy.get('#region', { timeout: 10000 }).should('to.exist');
    cy.get('#region', { timeout: 10000 }).select(0, {force: true});
    cy.get('#city', { timeout: 10000 }).should('to.exist');
    cy.get('#birthdate', { timeout: 10000 }).should('to.exist');
    cy.get('#image', { timeout: 10000 }).should('to.exist');
  })

  it('Crear un artista', () => {
    let name = 'Miguelangel';
    cy.get('#artistlist>li', { timeout: 10000 }).eq(1).click();
    cy.get('#buttonnewartist', { timeout: 10000 }).click({force: true});
    cy.get('#name', { timeout: 10000 }).type(name, {force: true});
    cy.get('#country', { timeout: 10000 }).select('Italy', {force: true});
    cy.get('#region', { timeout: 10000 }).select('Toscana', {force: true});
    cy.get('#city', { timeout: 10000 }).select('Province of Florence', {force: true});
    cy.get('#birthdate', { timeout: 10000 }).clear({force: true});
    cy.get('#birthdate', { timeout: 10000 }).type('1475-04-06', {force: true});
    cy.get('#image', { timeout: 10000 }).clear({force: true});
    cy.get('#image', { timeout: 10000 }).type('https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg/1280px-Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg', {force: true});
    cy.wait(1000);
    cy.get('#btncreateartist', { timeout: 10000 }).click({force: true});
    cy.get('#headerlistdetail', { timeout: 10000 }).should('to.contain', name);
    cy.get('#artistname'+name , { timeout: 10000 }).should('to.exist');
  })

  it('Editar un artista', () => {
    let name = 'Michelangelo';
    cy.get('#artistlist>li', { timeout: 10000 }).last().click();
    cy.get('#buttoneditartist', { timeout: 10000 }).click({force: true});
    cy.get('#name', { timeout: 10000 }).clear({force: true});
    cy.get('#name', { timeout: 10000 }).type(name, {force: true});
    cy.get('#city', { timeout: 10000 }).select('Province of Arezzo', {force: true});
    cy.get('#birthdate', { timeout: 10000 }).clear({force: true});
    cy.get('#birthdate', { timeout: 10000 }).type('1475-03-06', {force: true});
    cy.wait(1000);
    cy.get('#btneditartist', { timeout: 10000 }).click({force: true});
    cy.get('#headerlistdetail', { timeout: 10000 }).should('to.contain', name)
    cy.get('#artistname'+name, { timeout: 10000 }).should('to.exist');
  })


  it('Eliminar un artista', () => {
    let name = 'Michelangelo';
    cy.get('#artistlist>li', { timeout: 10000 }).last().click();
    cy.wait(1000);
    cy.get('#buttondeleteartist', { timeout: 10000 }).click({force: true});
    cy.get('button.swal2-deny', { timeout: 10000 }).click({force: true});
    cy.get('#headerlistdetail', { timeout: 10000 }).should('to.not.exist');
    cy.get('#artistname'+name, { timeout: 10000 }).should('to.not.exist');
  })


})
