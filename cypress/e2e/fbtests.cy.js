describe('fbtests.cy.js', () => {
  it ('Login de e-mail inválido', () => {
    
    cy.visit('www.facebook.com') //Access FB
    cy.get ('[id=email]').type('emailnaoexistente@email.comcom')
    cy.get ('[id=pass]').type('testeteste')
    cy.get ('button').click();   
  });

  it ('Senha inválida', () => { 
    cy.visit('www.facebook.com')
    cy.get ('[id=email]').type('lilolive@live.com')
    cy.get ('[id=pass]').type('asdqweafs')
    cy.get ('button').click();
  });

  it ('Acessar sem usuário e senha', () => {  
    cy.visit('www.facebook.com')
    cy.get ('button').click();
  });
  
  it ('Reinicialização de senha com sucesso', () => {  
    cy.visit('https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0')
    cy.get ('[name=email]').type('lilolive@live.com')
    cy.get ('[data-testid=royal_login_button]').click();
  });

  it ('Reinicialização de senha sem sucesso', () => {  
    cy.visit('https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0')
    cy.get ('[name=email]').type('Qualqueremail@superultradmail.com')
    cy.get ('[data-testid=royal_login_button]').click();
  });

  it ('Criação de Conta', () => {  
    cy.visit('www.facebook.com')
    cy.get ('[data-testid=open-registration-form-button]').click();
    cy.get ('[name=firstname]').type('QualquerNome');
    cy.get ('[name=lastname]').type('QualquerSobreNome');
    cy.get ('[name=reg_email__]').type('AnyEmailDigitado');
    cy.get ('[name=reg_passwd__]').type('QualquerPass');
  });
})