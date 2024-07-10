class HomePage{

    url(){
        cy.url().should("include", "/homepage");
    }

    sidebar(){
        cy.get('svg[data-icon="bars"]')
        .click();
    }

    getSmarter(){
        cy.get('body > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > nav:nth-child(2) > a:nth-child(3) > div:nth-child(1)') 
        .click();
    }

}
export default new HomePage();