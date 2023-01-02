
Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function(){
    const LongText = "dsahdusahdsaudhs uh au hdausdhsaudh usahdsuahdsaudhsuahddasidjsaidjsaoidjsadiojasdoisjadoijasdiojaoijaoi"
    cy.get('#firstName').type("André ")
    cy.get('#lastName').type("Lima")
    cy.get('#email').type("piruca.touro@gmail.com")
    cy.get('#open-text-area').type(LongText,{delay:0})
    cy.contains('.button',"Enviar").click()
    
})