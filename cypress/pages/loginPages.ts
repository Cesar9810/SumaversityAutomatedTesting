class LoginPage{
    visit(){
        cy.visit('https://qa.sumawealth.io/login');
    }

    fillUserName(username: string){
        cy.get('input[name="email"]').type(username);
    }

    fillPassword(password: string){
        cy.get('input[name="password"]').type(password);
    }

    submit(){
        cy.get('button[type="submit"]').click()
        .wait(5000);
    }

}

export default new LoginPage();