class AllCoursesPages{

    trendingCourses(){
        cy.contains('span', 'TRENDING COURSES').should('be.visible');
    }

    dineroBootcamp(){
        cy.contains('span', 'Dinero Bootcamp').should('be.visible');
    }

    jefaBootcamp(){
        cy.contains('span', 'Jefa Business Bootcamp English').should('be.visible');
    }

    clickStartLearning() {
        cy.contains('button', 'START LEARNING')
            .should('be.visible')
            .click();
    
        cy.wait(5000);
    }
}
export default new AllCoursesPages();