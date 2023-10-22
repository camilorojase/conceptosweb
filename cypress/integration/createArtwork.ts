


   describe('Pruebas E2E funcionalidad Obra de arte', () => {
    beforeEach(() => {

    })

    it('Debe existir link crear nueva Obra de arte', () => {
      cy.visit('http://localhost:4200/artists/list/106')
      cy.contains('David Bomberg')
      cy.wait(2000);
    })

    it('Ingresar al link de crear nueva Obra de arte', () => {
      cy.get('a[href="/artworks/create/106"]').click({force: true}) ;
      cy.wait(2000);
     })

      it('Se debe crear una obra de arte correctamente', () => {
      cy.get('input[id="name"]').eq(0).type('Obra de Arte E2E')
      cy.get('input[id="year"]').eq(0).type('2022')
      cy.get('input[id="description"]').eq(0).type('Description Prueba e2e')
      cy.get('input[formcontrolname="short_description"]').eq(0).type('2022')
      cy.get('button[type="submit"]').eq(0).click();
      cy.get('#toast-container').should('be.visible')
    })

    it('Se debe observar la nueva obra de arte en el listado de obras del artista', () => {
      cy.visit('http://localhost:4200/artists/list/106')
      cy.contains('David Bomberg')
      cy.wait(2000);
      cy.get('#list-artworks').contains('Obra de Arte E2E')
    })




  })
