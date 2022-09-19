/// <reference types="cypress" />

import {format} from '../../support/uteis' 

describe('Adiciona produtos no carrinho', () =>{


    it('Pega produto e soma', () =>{
        cy.visit('/');
        cy.get('#twotabsearchtextbox').type('O Senhor dos Anéis: A Sociedade do Anel');
        cy.get('#nav-search-submit-button').click();
        cy.contains('a', 'O Senhor dos Anéis: A Sociedade do Anel')
            .should('be.visible')
            .click();

        //clico no botão que adiciona os 3 produtos
        cy.get('#a-autoid-6 > .a-button-inner > .a-button-input').click();
                
        //mensagem de confirmação que os produtos foram adicionados
        cy.get('.a-size-medium-plus')
          .should('contain', 'Adicionado ao carrinho');
       
        //acessar o carrinho 
        cy.get('#sw-gtc > .a-button-inner > .a-button-text').click();
              
        //identifico o carrinho e cada produto dentro dele
        cy.get('#sc-active-cart > .a-cardui-body');
        cy.get('.sc-list-item-content').should('have.length', 3);


        //identifico valores
        let valor = 0
        
            
        cy.get('.sc-list-item-content')
        .each(($el, index, $list) => {
 
            cy.get($el).find('span.a-text-bold').invoke('text').then( text => {
                valor = valor + format(text)

                cy.log(format(text))
                cy.log(valor)
                
            })
            
        })

        //comparar o somatorio dos 3 produtos com o total do carrinho
        cy.get('#sc-subtotal-amount-activecart > .a-size-medium').invoke('text').then(text =>{
            cy.log(`valor total`, format(text))

            let formattedSubtotal = format(text)
            let expectedTotal = valor

            expect(formattedSubtotal).to.eq(expectedTotal)


        })
                           



    })

       
})