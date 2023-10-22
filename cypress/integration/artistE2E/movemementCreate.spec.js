
describe('Verificar toda la gestión de exhibiciones por museo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
    cy.get('a[routerlink="/artists"]', { timeout: 10000 }).last().click();
  })

  it('Crear un artista', () => {
    let name = 'Michelangelo';
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

  it('Verificar componente de crear un movimiento', () => {
    cy.get('#artistlist>li', { timeout: 10000 }).last().click();
    cy.wait(1000);
    cy.get('#btnnewmovement', { timeout: 10000 }).click({force: true});
    cy.get('#btncreatemovement', { timeout: 10000 }).should('to.exist');
    cy.get('#btnclearmovement', { timeout: 10000 }).should('to.exist');
    cy.get('#btncancel', { timeout: 10000 }).should('to.exist');
    cy.get('#name', { timeout: 10000 }).should('to.exist');
    cy.get('#countryOfOrigin', { timeout: 10000 }).should('to.exist');
    cy.get('#activeYears', { timeout: 10000 }).should('to.exist');
    cy.get('#description', { timeout: 10000 }).should('to.exist');
  })


  it('Crear un movimiento', () => {
    cy.get('#artistlist>li', { timeout: 10000 }).last().click();
    cy.wait(1000);
    cy.get('#btnnewmovement', { timeout: 10000 }).click({force: true});
    cy.get('#name', { timeout: 10000 }).type('High Renaissance', {force: true});
    cy.get('#countryOfOrigin', { timeout: 10000 }).select('Italy', {force: true});
    cy.get('#activeYears', { timeout: 10000 }).type('1495-1520', {force: true});
    cy.get('#description', { timeout: 10000 }).type('In art history, the High Renaissance was a short period of the most exceptional artistic production in the Italian states, particularly Rome, capital of the Papal States, and in Florence, during the Italian Renaissance. Most art historians state that the High Renaissance started around 1495 or 1500 and ended in 1520 with the death of Raphael, although some say the High Renaissance ended about 1525, or in 1527 with the Sack of Rome by the army of Charles V, Holy Roman Emperor, or about 1530 (see next section for specific art historians positions). The best-known exponents of painting, sculpture and architecture of the High Renaissance include Leonardo da Vinci, Michelangelo, Raphael, and Bramante. In recent years, the use of the term has been frequently criticized by some academic art historians for oversimplifying artistic developments, ignoring historical context, and focusing only on a few iconic works.', {force: true});
    cy.get('#btncreatemovement', { timeout: 10000 }).click({force: true});
    cy.get('#accordionMovements>div.accordion-item', { timeout: 10000 }).first().children('h2').children('button').should('to.contain','High Renaissance');
  })


  it('Verificar componente de listar un movimiento', () => {
    cy.get('#artistlist>li', { timeout: 10000 }).last().click();
    cy.wait(1000);
    cy.get('#btnaddmovement', { timeout: 10000 }).click({force: true});
    cy.get('tbody>tr', { timeout: 10000 }).should('to.exist');
    cy.get('button.btn-success', { timeout: 10000 }).should('to.exist');
    cy.get('button.btn-danger', { timeout: 10000 }).should('to.exist');
    cy.get('button.btn-secondary', { timeout: 10000 }).should('to.contain', 'Edit');
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
