class DetailsCourses{

    descriptionCourses(){
        cy.contains('span', 'About this course')
          .should('be.visible');
    }

    totalClass(){
        cy.contains('span', 'Classes')
          .should('be.visible');
    }

    totalMaterials(){
        cy.contains('span', 'Materials')
          .should('be.visible');
    }

    progressCourse(){
        cy.contains('span', 'Still no progress')
          .should('be.visible');
    }

}

export default new DetailsCourses();