


   describe('Agregar imagen a obra de arte', () => {
    beforeEach(() => {

    })

    it('Debe existir link crear nueva Obra de arte', () => {
      cy.visit('http://localhost:4200/artists/list/106')
      cy.contains('David Bomberg')
      cy.wait(2000);
    })

    it('ingresar a una obra de arte del listado', () => {
      cy.get('a[href="/artworks/list/109"]').click({force: true}) ;
      cy.wait(2000);
     })


    it('dar click al boton para asociar una nueva imagen a la obra de arte', () => {
      cy.get('  body > app-root > app-layout > div.content > div > app-artwork-list > div > div:nth-child(1) > app-artwork-detail > div > button').click({force: true}) ;
      cy.wait(2000);
     })

      it('Se debe crear una obra de arte correctamente', () => {
      cy.get('input[id="imgUrl"]').eq(0).type('http://placeimg.com/640/360/any')
      cy.get('input[id="imgAlt"]').eq(0).type('imagen pruebas e2e')
      cy.get('button[type="submit"]').eq(1).click({force: true})

    })



  })
