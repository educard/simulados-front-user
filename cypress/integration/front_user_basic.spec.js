describe('Simulados User Frontend', function() {
    it('Visits application at localhost:8080', function() {
        cy.visit('http://localhost:8080')
    })
    it('Displays "Entrar na sua conta" message', function() {
        cy.contains('Entrar na sua conta')
    })
})

describe('Login process', function () {
    it('Allows typing username', function () {
        cy.get('.test-login-input')
        .type('admin@simulados.com')
        .should('have.value', 'admin@simulados.com')
    })
    it('Allows typing password', function () {
        cy.get('.test-password-input')
        .type('admin')
        .should('have.value', 'admin')
    })
    it('Completes login and displays "Seja bem-vindo', function () {
        cy.get('.login__button').click()
        cy.contains('Seja bem-vindo')
    })
})

describe('Logout process', function () {
    it('Completes logout and displays home screen', function () {
        cy.contains('Logout').click()
        cy.contains('Entrar na sua conta')
    })
})