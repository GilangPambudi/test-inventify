/// <reference types="cypress" />
context('Sidebar', () => {
    beforeEach(() => {
      cy.visit('https://inventify.andhika.net/')
      cy.get('input[name="username"]').type('gilang')
      cy.get('input[name="password"]').type('gilang')
      cy.get('button[type="submit"]').click()
    })

    describe('Verify the List User Function', () => {
        it('Verify if all data is displayed on the tables', () => {
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'List User').click();
          cy.get('table').find('tr').should('have.length.gt', 2)
        })
        it('Verify if user can use search function', () =>{
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'List User').click();
          cy.get('#table_users_filter > label > .form-control').type('Admin');
          cy.get('table').find('tr').should('contain', 'Admin')
        })
        it('Verify if user can use the filter button', () => {
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'List User').click();
          cy.get('select[name="id_role"]').select('1');
          cy.get('table').find('tr').should('contain', 'Admin')
        })
        it('Verify if user will be redirected to add page after clicking add button', () => {
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'List User').click();
          cy.contains('Tambah').click();
          cy.url().should('include', '/user/create')
        })
        it('Verify if user will be redirected to detail page after clicking detail button', () => {
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'List User').click();
          cy.contains('Detail').click();
          cy.url().should('include', '/user/1')
        })
        it('Verify if user will be redirected to edit page after clicking edit button', () => {
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'List User').click();
          cy.contains('Edit').click();
          cy.url().should('include', '/user/1/edit')
        })
        it('Verify if the system will save the data that user have filled in add page', () => {
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'List User').click();
          cy.contains('Tambah').click();
          cy.get('select[name="id_role"]').select('1');
          cy.get('input[name="nama"]').type('Mr. Cypress');
          cy.get('input[name="email"]').type('cypress@cypress.io');
          cy.get('input[name="no_hp"]').type('01234567890');
          cy.get('input[name="username"]').type('Cypress Test');
          cy.get('input[name="password"]').type('1234567890');
          cy.contains('Simpan').click();
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'List User').click();
          cy.get('table').find('tr').contains('td', 'Mr. Cypress');
        })
        
        it('Verify if the system will save the data that user have filled in edit page', () => {
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'List User').click();
          cy.get('table').find('tr').contains('td', 'Mr. Cypress').parent().contains('Edit').click();
          cy.get('select[name="id_role"]').select('2');
          cy.get('input[name="nama"]').clear().type('Mr. Cypress Edited');
          cy.get('input[name="email"]').clear().type('CypressEdited@cypress.io');
          cy.get('input[name="no_hp"]').clear().type('01234567890');
          cy.get('input[name="username"]').clear().type('Cypress Test Edited');
          cy.get('input[name="password"]').clear().type('1234567890');
          cy.contains('Simpan').click();
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'List User').click();
          cy.get('table').find('tr').contains('td', 'Mr. Cypress Edited');
        })
        it('Verify if the system will delete the data that user have chosen', () => {
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'List User').click();
          cy.get('table').find('tr').contains('td', 'Mr. Cypress Edited').parent().contains('Hapus').click();
          cy.get('table').find('tr').should('have.length.lt', 5);
        })
    })
})