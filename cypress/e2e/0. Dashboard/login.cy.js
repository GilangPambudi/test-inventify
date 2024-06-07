context('Login', () => {
    beforeEach(() => {
        cy.visit('https://inventify.andhika.net/')
    })

    describe('Verify the Login Function as admin', () => {
        it('Verify if user can login to the system', () => {
            cy.visit('https://inventify.andhika.net/')
            cy.get('input[name="username"]').type('gilang')
            cy.get('input[name="password"]').type('gilang')
            cy.get('button[type="submit"]').click()
            cy.url().should('include', '/admin')
        })
    })

    describe('Verify the Login Function as verifikator', () => {
        it('Verify if verifikator can login to the system', () => {
            cy.visit('https://inventify.andhika.net/')
            cy.get('input[name="username"]').type('gilangvrf')
            cy.get('input[name="password"]').type('gilangvrf')
            cy.get('button[type="submit"]').click()
            cy.url().should('include', '/verif')
        })
    })
})