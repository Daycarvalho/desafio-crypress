describe('Amazon adiciona produto no carrinho', () =>{

    beforeEach(() =>{
        cy.visit('/');
    })

    it('busque o produto e selecione', () => {
        cy.get('#twotabsearchtextbox').type('O Senhor dos Anéis: A Sociedade do Anel');
        cy.get('#nav-search-submit-button').click();
        //Confirma que é o produto esperado e seleciona
        cy.contains('a', 'O Senhor dos Anéis: A Sociedade do Anel')
            .should('be.visible')
            .click();
        //Adiciona o produto ao carrinho
        cy.get('#add-to-cart-button').click();
        //Identifica que foi apresentada mensagem de sucesso ao adicionar produto ao carrinho
        cy.get('.a-size-medium-plus')
           .should('contain', 'Adicionado ao carrinho');
 
    })

 
})



