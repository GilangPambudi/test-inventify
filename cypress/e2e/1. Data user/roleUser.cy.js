/// <reference types="cypress" />
context('Sidebar', () => {
    beforeEach(() => {
      cy.visit('https://inventify.andhika.net/')
      cy.get('input[name="username"]').type('gilang')
      cy.get('input[name="password"]').type('gilang')
      cy.get('button[type="submit"]').click()
    })

    describe('Verify the Role User Function', () => {
        it('Verify if all data is displayed on the tables', () => {
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'Role User').click();
          cy.get('table').find('tr').should('have.length.gt', 2)
        })
        it('Verify if user can use search function', () =>{
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'Role User').click();
          cy.get('#table_role_filter > label > .form-control').type('Admin');
          cy.get('table').find('tr').should('contain', 'Admin')
        })
        it('Verify if user will be redirected to add page after clicking add button', () => {
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'Role User').click();
          cy.contains('Tambah').click();
          cy.url().should('include', '/role/create')
        })
        it('Verify if user will be redirected to detail page after clicking detail button', () => {
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'Role User').click();
          cy.contains('Detail').click();
          cy.url().should('include', '/role/1')
        })
        it('Verify if user will be redirected to edit page after clicking edit button', () => {
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'Role User').click();
          cy.contains('Edit').click();
          cy.url().should('include', '/role/1/edit')
        })
        it('Verify if the system will save the data that user have filled in add page', () => {
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'Role User').click();
          cy.contains('Tambah').click();
          cy.get('input[name="kode_role"]').type('CYP');
          cy.get('input[name="nama_role"]').type('Tester Cypress');
          cy.contains('Simpan').click();
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'Role User').click();
          cy.get('table').find('tr').contains('td', 'Tester Cypress');
        })
        it('Verify if the system will save the data that user have filled in edit page', () => {
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'Role User').click();
          cy.get('table').find('tr').contains('td', 'Tester Cypress').parent().contains('Edit').click();
          cy.get('input[name="kode_role"]').clear().type('CPS');
          cy.get('input[name="nama_role"]').clear().type('Tester Cypress Edited');
          cy.contains('Simpan').click();
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'Role User').click();
          cy.get('table').find('tr').contains('td', 'Tester Cypress Edited');
        })
        it('Verify if the system will delete the data that user have chosen', () => {
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'Role User').click();
          cy.get('table').find('tr').contains('td', 'Tester Cypress Edited').parent().contains('Hapus').click();
          cy.get('table').find('tr').should('have.length.lt', 5);
        })
    })
})