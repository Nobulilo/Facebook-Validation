# Validação de tela de login do Facebook [BDD]
***Gherkin***

### **Background**:
**Dado** que o usuário está na interface de login.

**Cenário:** ***Login de usuário com sucesso***   
**Dado** usuários cadastrados no sistema   
**Quando** usuário informar usuário e senha  
**E** o usuário existe no sistema  
**E** a senha está correta no cadastro  
**Então** é gerado um token e usuário é logado na aplicação.  


**Cenário**: ***Login de e-mail com sucesso***   
**Dado** e-mails cadastrados no sistema  
**Quando** usuário informar e-mail e senha  
**E** o e-mail existe no sistema  
**E** a senha está correta no cadastro  
**Então** é gerado um token e usuário é logado na aplicação.  

**Cenário**: ***Login de telefone com sucesso***   
**Dado** telefones cadastrados no sistema   
**Quando** usuário informar telefone e senha   
**E** o telefone existe no sistema   
**E** a senha está correta no cadastro   
**Então** é gerado um token e usuário é logado na aplicação.   



**Cenário**: ***Login de e-mail inválido***   
**Dado** e-mails cadastrados no sistema   
**Quando** usuário informar e-mail e senha   
**E** o e-mail não existe no sistema   
**Então** visualizar a mensagem “O e-mail que você inseriu não está conectado a uma conta”   

**Cenário**: ***Senha inválida***   
**Dado** e-mails cadastrados no sistema   
**Quando** usuário informar e-mail e senha   
**E** o e-mail existe no sistema   
**E** a senha está incorreta    
**Então** visualizar a mensagem “A Senha que inserida está incorreta”   

**Cenário**: ***Clicar em Entrar sem preencher o campo e-mail ou telefone***
**Dado** e-mails cadastrados no sistema   
**Quando** usuário não informar e-mail   
**Então** visualizar a mensagem “O e-mail ou o número de celular que você inseriu não está conectado a uma conta”   



### **Background:**   
**Dado** que o usuário está na interface de login   
**Quando** escolher “Esqueceu a senha?”   

**Cenário**: ***Recuperação de senha de conta de usuário com sucesso***   
**Dado** os usuários do sistema   
**Quando** preencho o campo e-mail   
**E** quando efetuar a pesquisa destes dados   
**E** usuário/e-mail existe no sistema   
**Então** visualizar interface “Enviar código por e-mail”   

**Cenário**: ***Recuperação de senha de conta de usuário sem sucesso***   
**Dado** os usuários do sistema   
**Quando** preencho o campo e-mail   
**E** quando efetuar a pesquisa destes dados   
**E** usuário/e-mail não existe no sistema   
**Então** visualizar interface “Nenhum resultado para a pesquisa”   

### **Background:**   
**Dado** que o usuário está na interface de login   
**Quando** escolher “Criar nova conta”   

**Cenário**: ***Criação de conta no Facebook efetuada com sucesso***   
**Dado** os usuários do sistema   
**Quando** informar nome, e-mail e senha de um usuário novo   
**E** o e-mail não existe no sistema   
**Então** cadastrar novo usuário   

**Cenário**: ***Criação de conta no Facebook efetuada sem sucesso***   
**Dado** os usuários do sistema   
**Quando** informar nome, e-mail e senha de um usuário novo   
**E** o e-mail já existe no sistema   
**Então** exibir a mensagem “Este e-mail já está sendo utilizado, favor inserir um novo e-mail”   

## ***Considerações***

Fiz uma tentativa de automatização dos ambientes de erro utilizando Cypress, após algumas pesquisas, verifiquei que o ambiente do facebook é um pouco resistente a ferramentas de automação, apesar de não ser recomendado testes em API's que não sejam criações próprias, a estrutura feita no código é somente para ilustrar a possibilidade de automação de tratativas como esta.
