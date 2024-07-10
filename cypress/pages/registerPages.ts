class RegisterPages{

    visit(){
        cy.visit('https://development.sumawealth.io/signup');
    }

    fillEmail(email: string){
        cy.get('input[name="email"]').type(email);
    }

    fillPassword(password: string){
        cy.get('input[name="password"]').type(password);
    }

    fillFirstName(firstName: string) {
        cy.get('input[name="name"]').type(firstName);
    }
    
    fillLastName(lastName: string) {
        cy.get('input[name="lastname"]').type(lastName);
    }
    
    fillPhoneNumber(phoneNumber: string) {
        cy.get('input[name="phone"]').type(phoneNumber);
    }

    clickSignUp(){
        cy.get('button[type="submit"]').click();
    }

}

export default new RegisterPages();