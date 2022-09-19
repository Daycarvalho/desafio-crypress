#language: pt

Funcionalidade: Login 

Como área de segurança da Avenue
Eu quero proteger o acesso indevido à conta de meus correntistas 
A fim de evitar fraldes


Cenário: Usuário válido tentando recuparar senha com código inválido
		Dado que não sei a senha de acesso
		Quando eu realizar procedimentos para recuparação de senha
		Mas inserir código inválido
		E criar nova senha
		Então visualizarei a mensagem "Código inválido"
	

Explicação: Acima descrevi um dos cenários que julgo mais importante para uma empresa financeira, pois é neste momento que alguém mal intencionado 
pode recuparar a senha e realizar transações indevidas, a empresa precisa transmitir a segurança para o cliente que ninguém, além do próprio, acessará a conta.





