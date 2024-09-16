class AllCoursesPages{

    trendingCourses(){
        cy.contains('span', 'Trending Courses').should('be.visible');
    }

    dineroBootcamp(){
        cy.contains('span', 'Dinero Bootcamp').should('be.visible');
    }

    jefaBootcamp(){
        cy.contains('span', 'Jefa Bootcamp').should('be.visible');
    }

    clickStartLearning() {
        cy.contains('button', 'Start Learning')
            .should('be.visible')
            .click();
    
        cy.wait(5000);
    }
}
export default new AllCoursesPages();