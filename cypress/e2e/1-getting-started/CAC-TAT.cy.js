/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
    cy.visit("../cypress-basico-v2/src/index.html")

    })

    
    
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  
    })

    it("preenche  os campos  obrigatiorios  e envia o formulario", function(){
        const LongText = "dsahdusahdsaudhs uh au hdausdhsaudh usahdsuahdsaudhsuahddasidjsaidjsaoidjsadiojasdoisjadoijasdiojaoijaoi"
        cy.get('#firstName').type("André ")
        cy.get('#lastName').type("Lima")
        cy.get('#email').type("piruca.touro@gmail.com")
        cy.get('#open-text-area').type(LongText,{delay:0})
        cy.contains('button',"Enviar").click()
        cy.get(".success").should("be.visible")
    })  

    it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function(){
        
        const LongText = "dsahdusahdsaudhs uh au hdausdhsaudh usahdsuahdsaudhsuahddasidjsaidjsaoidjsadiojasdoisjadoijasdiojaoijaoi"
        cy.get('#firstName').type("André ")
        cy.get('#lastName').type("Lima")
        cy.get('#email').type("piruca.touro@gmail,com")
        cy.get('#open-text-area').type(LongText,{delay:0})
        cy.contains('button',"Enviar").click()
        cy.get(".error").should("be.visible")
    })

    it("campo telefone continua vazio", function(){
        cy.get('#phone').type("testestes").should("have.value", '')
    })


    it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário",function(){
        const LongText = "dsahdusahdsaudhs uh au hdausdhsaudh usahdsuahdsaudhsuahddasidjsaidjsaoidjsadiojasdoisjadoijasdiojaoijaoi"
        cy.get('#firstName').type("André ")
        cy.get('#lastName').type("Lima")
        cy.get('#phone-checkbox').click()
        cy.get('#email').type("piruca.touro@gmail.com")
        cy.get('#open-text-area').type(LongText,{delay:0})
        cy.contains('button',"Enviar").click()
        cy.get(".error").should("be.visible") 
    })

    it("preenche e limpa os campos nome, sobrenome, email e telefone", function(){
        cy.get('#firstName')
        .type("André")
        .should("have.value","André")
        .clear()
        .should("have.value",'')

        cy.get('#lastName').type("Lima")
        .should("have.value","Lima")
        .clear()
        .should("have.value",'')

        cy.get('#email').type("piruca.touro@gmail.com")
        .should("have.value","piruca.touro@gmail.com")
        .clear()
        .should("have.value",'')

        cy.get('#phone-checkbox').click()
        cy.get('#phone').type("43964241")
        .should("have.value",'43964241')
        .clear()
        .should("have.value",'')

    })

    it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios.", function(){

        cy.contains('button',"Enviar").click()
        cy.get(".error").should("be.visible")

    })


   it("envia o formuário com sucesso usando um comando customizado", function(){
    cy.fillMandatoryFieldsAndSubmit()

    cy.get(".success").should("be.visible")
   })
   




    
    
    

})