/// <reference types="cypress" />
context('Sidebar', () => {
    beforeEach(() => {
      cy.visit('https://inventify.andhika.net/')
      cy.get('input[name="username"]').type('gilang')
      cy.get('input[name="password"]').type('gilang')
      cy.get('button[type="submit"]').click()
      cy.contains('li.nav-item', 'Data Barang').click();
      cy.contains('a.nav-link', 'List Barang').click();
      cy.location().then((location) => {
        cy.wrap(location.href).should("contain", "barang")
      })
    })

    describe('Verify List Barang Function', () => {
        // 1. Verify if all data is displayed on the tables
        it('Verify if all data is displayed on the tables', () => {
            cy.get('table').find('tr').should('have.length.gt', 2)
        })
        // 2. Verify if user can use search function
        it('Verify if user can use search function', () =>{
            cy.get('#table_barang_filter > label > .form-control').type('Lemari Besi');
            cy.get('table').find('tr').should('contain', 'Lemari Besi')
        })
        // 3. Verify if user can use the filter button
        it('Verify if user can use filter function', () => {
            cy.get('select[name="id_kode_barang"]').select('2');
            cy.get('table').contains('td', 'Bor');
        })
        // 4. Verify if user will be redirected to add page after clicking add button
        it('Verify if user will be redirected to add page after clicking add button', () => {
            cy.contains('Tambah').click();
            cy.url().should('include', '/barang/create')
        })
        // 5. Verify if user will be redirected to detail page after clicking detail button
        it('Verify if user will be redirected to detail page after clicking detail button', () => {
            cy.contains('Detail').click();
            cy.url().should('include', '/barang/1')
        })
        // 6. Verify if user will be redirected to edit page after clicking edit button
        it('Verify if user will be redirected to edit page after clicking edit button', () => {
            cy.contains('Edit').click();
            cy.url().should('include', '/barang/1/edit')
        })
        // 7. Verify if the system will save the data that user have filled in add page

        // 8. Verify if the system will save the data that user have filled in edit page
        // 9. Verify if the system can delete the data after user clicked the "Hapus" button
        // 10. Verify if the "Download" button is working correctly
    })
})