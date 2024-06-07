/// <reference types="cypress" />
context('Sidebar', () => {
    beforeEach(() => {
      cy.visit('https://inventify.andhika.net/login')
      cy.get('input[name="username"]').type('gilang')
      cy.get('input[name="password"]').type('gilang')
      cy.get('button[type="submit"]').click()
    })
    
    describe('Verify the List Ruangan Function', () => {
        it('Verify if all data is displayed on the tables', () => {
          cy.contains('li.nav-item', 'Data Distribusi').click();
          cy.contains('a.nav-link', 'List Ruangan').click();
          cy.get('table').find('tr').should('have.length.gt', 2)
        })
        it('Verify if user can use search function', () =>{
          cy.contains('li.nav-item', 'Data Distribusi').click();
          cy.contains('a.nav-link', 'List Ruangan').click();
          cy.get('#table_ruang_filter > label > .form-control').type('R. Dosen 1');
          cy.get('table').find('tr').should('contain', 'R. Dosen 1')
        })
        it('Verify if user will be redirected to add page after clicking add button', () => {
          cy.contains('li.nav-item', 'Data Distribusi').click();
          cy.contains('a.nav-link', 'List Ruangan').click();
          cy.contains('Tambah').click();
          cy.url().should('include', '/ruang/create')
        })
        it('Verify if user will be redirected to detail page after clicking detail button', () => {
          cy.contains('li.nav-item', 'Data Distribusi').click();
          cy.contains('a.nav-link', 'List Ruangan').click();
          cy.contains('Detail').click();
          cy.url().should('include', '/ruang/1')
        })
        it('Verify if user will be redirected to edit page after clicking edit button', () => {
          cy.contains('li.nav-item', 'Data Distribusi').click();
          cy.contains('a.nav-link', 'List Ruangan').click();
          cy.contains('Edit').click();
          cy.url().should('include', '/ruang/1/edit')
        })
        it('Verify if the system will save the data that user have filled in add page', () => {
          cy.contains('li.nav-item', 'Data Distribusi').click();
          cy.contains('a.nav-link', 'List Ruangan').click();
          cy.contains('Tambah').click();
          cy.get('input[name="kode_ruang"]').type('RCP');
          cy.get('input[name="nama_ruang"]').type('Ruang Cypress');
          cy.get('input[name="nip"]').type('123123');
          cy.get('input[name="penanggung_jawab"]').type('Mr. Cypress');
          cy.contains('Simpan').click();
          cy.contains('li.nav-item', 'Data Distribusi').click();
          cy.contains('a.nav-link', 'List Ruangan').click();
          cy.get('table').find('tr').should('have.length.gt', 4);
        })
        it('Verify if the system will save the data that user have filled in edit page', () => {
          cy.contains('li.nav-item', 'Data Distribusi').click();
          cy.contains('a.nav-link', 'List Ruangan').click();
          cy.contains('Edit').click();
          cy.get('input[name="kode_ruang"]').clear().type('R06.01');
          cy.get('input[name="nama_ruang"]').clear().type('R. Dosen 1');
          cy.get('input[name="nip"]').clear().type('1971111019990');
          cy.get('input[name="penanggung_jawab"]').clear().type('Rudy Ariyanto, ST., M.Cs.');
          cy.contains('Simpan').click();
          cy.contains('li.nav-item', 'Data Distribusi').click();
          cy.contains('a.nav-link', 'List Ruangan').click();
          cy.get('table').find('tr').should('have.length.gt', 4);
        })
        it('Verify if the system will delete the data that user have chosen', () => {
          cy.contains('li.nav-item', 'Data Distribusi').click();
          cy.contains('a.nav-link', 'List Ruangan').click();
          cy.get('table').find('tr').contains('td', 'Ruang Cypress').parent().contains('Hapus').click();
          cy.get('table').find('tr').should('have.length.lt', 5);
        })
    })
})