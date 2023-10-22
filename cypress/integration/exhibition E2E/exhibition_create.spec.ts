
describe('Verificar toda la gestión de exhibiciones por museo', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:4200/museums/list/100')
  })
  it('Debe existir zona para listar exhibiciones', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    cy.get('dt').eq(2).should('have.text', 'Exhibitions')
    // and then perform an assertion with `should`.
  })
  it('Debe existir link para crear exhibiciones', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    cy.get('dt').eq(2).should('have.text', 'Exhibitions')
    // and then perform an assertion with `should`.
    cy.get('a').contains('Create Exhibition').should('have.text', 'Create Exhibition')
  })
  it('Debe existir zona para crear patrocinadores', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    cy.get('dt').eq(2).should('have.text', 'Exhibitions')
    // and then perform an assertion with `should`.
    cy.get('a').contains('Create Exhibition').should('have.text', 'Create Exhibition').click()
    cy.get('p.h4').contains('new sponsor').should('have.text', 'First, create a new sponsor')
  })
  it('Se debe crear un patrocinador correctamente', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    cy.get('dt').eq(2).should('have.text', 'Exhibitions')
    // and then perform an assertion with `should`.
    cy.get('a').contains('Create Exhibition').should('have.text', 'Create Exhibition').click()
    cy.get('p.h4').contains('new sponsor').should('have.text', 'First, create a new sponsor')
    cy.get('input[id="name"]').eq(0).type('Sponsor Name Test1')
    cy.get('input[id="description"]').eq(0).type('Sponsor Description Test1')
    cy.get('input[id="website"]').type('www.sponsorurltest1.com')
    cy.get('button[type="submit"]').eq(0).click({force: true});
    cy.get('#toast-container').should('be.visible')
  })
  it('Se debe crear una exhibicion correctamente', () => {
    cy.get('dt').eq(1).should('have.text', 'Exhibitions')
    cy.get('a').contains('Create Exhibition').should('have.text', 'Create Exhibition').click()
    cy.get('p.h4').contains('new sponsor').should('have.text', 'First, create a new sponsor')
    cy.get('input[id="name"]').eq(0).type('Sponsor Name Test2')
    cy.get('input[id="description"]').eq(0).type('Sponsor Description Test2')
    cy.get('input[id="website"]').type('www.sponsorurltest1.com')
    cy.get('button[type="submit"]').eq(0).click({force: true});
    cy.get('input[id="name"]').eq(1).type('Exhibition Name Test1')
    cy.get('input[id="description"]').eq(1).type('Exhibition Description Test1')
    cy.get('button[type="submit"]').eq(1).click({force: true});
    cy.get('#toast-container').should('be.visible')

  })
  it('Debe observarse la exhibicion creada en el listado correctamente', () => {
    cy.get('dt').eq(1).should('have.text', 'Exhibitions')
    cy.get('a').contains('Create Exhibition').should('have.text', 'Create Exhibition').click()
    cy.get('p.h4').contains('new sponsor').should('have.text', 'First, create a new sponsor')
    cy.get('input[id="name"]').eq(0).type('Sponsor Name Test3')
    cy.get('input[id="description"]').eq(0).type('Sponsor Description Test3')
    cy.get('input[id="website"]').type('www.sponsorurltest1.com')
    cy.get('button[type="submit"]').eq(0).click({force: true});
    cy.get('input[id="name"]').eq(1).type('Exhibition Name Test2')
    cy.get('input[id="description"]').eq(1).type('Exhibition Description Test2')
    cy.get('button[type="submit"]').eq(1).click({force: true});
    cy.get('dd').children('a').contains('Exhibition Name Test2').should('have.text', 'Exhibition Name Test2')
  })
  it('Debe poder acceder y ver la exhibicion creada en el listado correctamente', () => {
    cy.get('dt').eq(2).should('have.text', 'Exhibitions')
    // and then perform an assertion with `should`.
    //cy.get('#navbarNav').scrollTo('top')
    cy.get('dd').children('a').contains('Exhibition Name Test2').should('have.text', 'Exhibition Name Test2').click({force: true})
    cy.get('h2').contains('Exhibition: '+'Exhibition Name Test2').should('have.text', 'Exhibition: '+'Exhibition Name Test2')
  })
  it('Debe asociar una imagen a una exhibición', () => {
    cy.get('dd').children('a').contains('Exhibition Name Test2').should('have.text', 'Exhibition Name Test2').click({force: true})
    cy.get('#btnAssociateArtwork').eq(0).click({force: true});
    cy.get('#artist', { timeout: 10000 }).select(1, {force: true});
    cy.get('#artwork', { timeout: 10000 }).select(1, {force: true});
    cy.get('#btnSave').eq(0).click({force: true});
    cy.get('#toast-container').should('be.visible')
  })
})
