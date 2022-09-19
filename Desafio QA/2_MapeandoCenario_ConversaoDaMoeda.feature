#language: pt

Funcionalidade: Conversão da moeda

Como cliente da Avenue
Eu quero poder converter meu saldo da conta brasileira
A fim de ter saldo na conta americana
E estar apto para realizar a negociação de ativos 


Cenário: Realizar câmbio real para dólar
		Dado que eu esteja autenticada na plataforma
		Quando eu clicar no botão Câmbio
		E realizar todos os procedimentos para efetivar esta conversão
		Então visualizarei que o saldo na conta americana foi inserido 
		
		
Explicação: Dado que a Avenue é uma corretora americana, esta etapa é primordial para realizar qualquer negociação de ativos, 
então é um cenário que caso falhe, a empresa poderá perder dinheiro.
