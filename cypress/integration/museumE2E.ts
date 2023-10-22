describe('Pruebas E2E funcionalidad de Museos', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/');
      cy.get('a[routerlink="/museums/list"]', { timeout: 10000 }).last().click();
    })

    it('Should exists elements to create museum', () => {
      cy.get('#btnAddMuseum', { timeout: 10000 }).click({force: true});
      cy.get('#name', { timeout: 10000 }).should('to.exist');
      cy.get('#description', { timeout: 10000 }).should('to.exist');
      cy.get('#address', { timeout: 10000 }).should('to.exist');
      cy.get('#city', { timeout: 10000 }).should('to.exist');
      cy.get('#image', { timeout: 10000 }).should('to.exist');
      cy.get('#btnCancel', { timeout: 10000 }).should('to.contain', 'Cancel');
      cy.get('#btnSave', { timeout: 10000 }).should('to.contain', 'Save');
    });

    it('Show new museum dialog', () => {
      cy.get('#btnAddMuseum', { timeout: 10000 }).click({force: true});
      cy.wait(2000);
     });

    it('Add new Museum successful', () => {
      cy.get('#btnAddMuseum', { timeout: 10000 }).click({force: true});
      cy.wait(2000);
      cy.get('input[id="name"]').eq(0).type('Museum E2E')
      cy.get('input[id="description"]').eq(0).type('Description E2E')
      cy.get('input[id="address"]').eq(0).type('42 View Street')
      cy.get('input[id="city"]').eq(0).type('London')
      cy.get('input[id="image"]').eq(0).type('https://upload.wikimedia.org/wikipedia/commons/6/66/Louvre_Museum_Wikimedia_Commons.jpg')
      cy.get('#btnSave').eq(0).click();
      cy.get('#toast-container').should('be.visible')
      cy.wait(2000);
      cy.contains('Museum E2E')
    });

    it('Show new museum detail', () => {
      cy.get('[alt="Museum E2E"]').last().click({force: true});
      cy.wait(2000);
      cy.get('#museumDetailName', { timeout: 10000 }).should('to.contain', 'Museum E2E');
     });
  })
