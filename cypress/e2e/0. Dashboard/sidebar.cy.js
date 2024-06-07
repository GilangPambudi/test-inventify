/// <reference types="cypress" />
context('Sidebar', () => {
    beforeEach(() => {
      cy.visit('https://inventify.andhika.net/')
      cy.get('input[name="username"]').type('gilang')
      cy.get('input[name="password"]').type('gilang')
      cy.get('button[type="submit"]').click()
    })

    describe('Verify Sidebar Button', () => {
        it('Verify All Items button is working correctly', () => {
          cy.contains('li.nav-item', 'Data User').click();
          cy.contains('a.nav-link', 'Role User').should('exist');
          cy.contains('a.nav-link', 'List User').should('exist');
          cy.contains('li.nav-item', 'Data Barang').click();
          cy.contains('a.nav-link', 'Kode Barang').should('exist');
          cy.contains('a.nav-link', 'List Barang').should('exist');
          cy.contains('a.nav-link', 'Status Barang').should('exist');
          cy.contains('li.nav-item', 'Data Distribusi').click();
          cy.contains('a.nav-link', 'List Ruangan').should('exist');
          cy.contains('a.nav-link', 'Distribusi Barang JTI').should('exist');
        })
    })
})