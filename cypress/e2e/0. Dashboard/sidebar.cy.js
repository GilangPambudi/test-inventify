/// <reference types="cypress" />
context('Sidebar', () => {
    beforeEach(() => {
      cy.visit('https://inventify.andhika.net/')
    })

    describe('Verify Sidebar Button for admin', () => {
        it('Verify All Items button is working correctly', () => {
          cy.get('input[name="username"]').type('gilang')
          cy.get('input[name="password"]').type('gilang')
          cy.get('button[type="submit"]').click()
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
          cy.contains('a.nav-link', 'Profile').should('exist');
          cy.contains('a.nav-link', 'Logout').should('exist');
        })
    })

    describe('Verify Sidebar Button for verifikator', () => {
      it('Verify All Items button is working correctly', () => {
        cy.get('input[name="username"]').type('gilangvrf')
        cy.get('input[name="password"]').type('gilangvrf')
        cy.get('button[type="submit"]').click()
        cy.contains('a.nav-link', 'Distribusi Barang JTI').should('exist');
        cy.contains('a.nav-link', 'Profile').should('exist');
        cy.contains('a.nav-link', 'Logout').should('exist');
      })
  })
})