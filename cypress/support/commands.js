Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function (){

    cy.get('#firstName').type('vitor hugo')
    cy.get('#lastName').type('vitoriano')
    cy.get('#email').type('vitorianovitoriano5@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()



})
