describe('Cadastro de novo usuário', () =>{

    beforeEach(() =>{
        cy.visit('/');
    })


    const usuarios = require('../../fixtures/Cadastro.json');
    usuarios.forEach(usuario => {

        it(`registra novo usuário ${usuario.nome}`, () => {
            cy.get('.nav-signin-tt').should('be.visible');
            cy.get('.nav-signin-tooltip-footer > .nav-a').click();
            cy.get('#ap_customer_name').type(usuario.nome);
            cy.get('#ap_email').type(usuario.email);
            cy.get('#ap_password').type(usuario.Senha);
            cy.get('#ap_password_check').type(usuario.Senha);
     
        })




    });



 
})
