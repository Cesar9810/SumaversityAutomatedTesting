class ViewClassPage{

    clickContinue(){
        cy.contains('button', 'Continue')
            .should('be.visible')
            .click();
    
        cy.wait(5000);
    }

    clickClass(){
        cy.get('button.absolute.inset-0.flex.h-full.w-full.items-center.justify-center')
          .eq(0) // Selecciona el primer elemento (el índice es 0 basado)
          .click();
    }

    urlClass(){
        cy.url().should('match', /\/sumaversity\/courses\/\d+\/\d+/);
    }

}

export default new ViewClassPage();