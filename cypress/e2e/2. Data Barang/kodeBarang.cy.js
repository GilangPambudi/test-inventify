/// <reference types="cypress" />
context('Sidebar', () => {
    beforeEach(() => {
      cy.visit('https://inventify.andhika.net/')
      cy.get('input[name="username"]').type('gilang')
      cy.get('input[name="password"]').type('gilang')
      cy.get('button[type="submit"]').click()
      cy.contains('li.nav-item', 'Data Barang').click();
      cy.contains('a.nav-link', 'Kode Barang').click();
      cy.location().then((location) => {
        cy.wrap(location.href).should("contain", "kode")
      })
    })

    describe('Verify Kode Barang Function', () => {
        it('Verify if all data is displayed on the tables', () => {
            cy.contains('th.sorting', 'Kode Barang').should('exist');
            cy.get('#table_kode').contains('td', '3050104001');
            cy.get('#table_kode').contains('td', '3030101005');
            cy.contains('th.sorting', 'Deskripsi Barang').should('exist');
            cy.get('#table_kode').contains('td', 'Lemari Besi / Metal');
            cy.get('#table_kode').contains('td', 'Mesin Bor');
        })

        it('Verify if user can use search function', () => {
            cy.get('#table_kode_filter').type('Mesin Bor')
            cy.get('#table_kode').contains('td', 'Lemari Besi / Metal').should('not.exist');
            cy.get('#table_kode').contains('td', 'Mesin Bor');
        })

        it('Verify if user will be redirected to add page after clicking "Tambah" button', () => {
            cy.get('div.card-tools').click();
            cy.location().then((location) => {
                cy.wrap(location.href).should("contain", "kode/create")
            })
        })

        it('Verify if user will be redirected to detail page after clicking "Detail" button', () => {
            cy.get('#table_kode').contains('a', 'Detail').click();
            cy.location().then((location) => {
                cy.wrap(location.href).should("contain", "kode/1")
            })
        })

        it('Verify if user will be redirected to edit page after clicking "Edit" button', () => {
            cy.get('#table_kode').contains('a', 'Edit').click();
            cy.location().then((location) => {
                cy.wrap(location.href).should("contain", "kode/1/edit")
            })
        })

        it('Verify if the system will save the data that user have filled in add page', () => {
            cy.get('div.card-tools').click();
            cy.location().then((location) => {
                cy.wrap(location.href).should("contain", "kode/create")
            })
            cy.get('#kode_barang').type('3050102004');
            cy.get('#satuan').select('Buah');
            cy.get('#deskripsi_barang').type('Mesin Kas Register');
            cy.get('.btn.btn-primary.btn-sm').click();
            cy.location().then((location) => {
                cy.wrap(location.href).should("contain", "kode")
            })
            cy.get('.alert.alert-success').should('exist');
        })

        it('Verify if the system will save the data that user have filled in edit page', () => {
            cy.get('table').find('tr').contains('td', 'Mesin Kas Register').parent().contains('Edit').click();
            cy.get('#kode_barang').clear().type('3050102004');
            cy.get('#deskripsi_barang').clear().type('Mesin Kas Register (Edited)');
            cy.get('.btn.btn-primary.btn-sm').click();
            cy.location().then((location) => {
                cy.wrap(location.href).should("contain", "kode")
            })
            cy.get('.alert.alert-success').should('exist');
        })

        it('Verify if the system can delete the data after user clicked the "Hapus" button', () => {
            cy.get('table').find('tr').contains('td', 'Mesin Kas Register (Edited)').parent().contains('Hapus').click();
            cy.get('.alert.alert-success').should('exist');
        })
    })
})