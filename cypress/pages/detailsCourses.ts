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
    cy.contains('span', "Let's add some color to this bar")
      .should('be.visible');
  }

  titleCourses(){
    cy.get('span.font-work-sans.text-sumawealth-blue-100').should('be.visible');
  }

  imageCourses(){
    cy.get('img.object-center-bottom.h-full.w-full.rounded-2xl.object-scale-down').should('be.visible');
  }

  butonClasses(){
    cy.contains('span', 'Classes').should('be.visible');
  }

  butonMaterials(){
    cy.contains('span', 'Materials').should('be.visible');
  }

  butonComments(){
    cy.contains('span', 'Comments').should('be.visible');
  }

  butonQuiz(){
    cy.contains('span', 'Quiz').should('be.visible');
  }

  butonCertificate(){
    cy.contains('span', 'Certificate')
  }

  clickCourses(){
    cy.contains('span', 'Classes').click();
  }

  viewClass(){
    cy.get('button.absolute.inset-0.flex.h-full.w-full.items-center.justify-center')
      .should('be.visible');
  }

  clickComments(){
    cy.contains('span', 'Comments').click();
  }

  viewComments(){
    cy.contains('button', 'Reply')
      .should('exist');

  }

  createComments(){
    const randomText = Math.random().toString(36).substring(2, 15);

    cy.get('input[name="content"]')
      .type(randomText);

    cy.get('button[type="submit"]').click();

    Cypress.env('postedComment', randomText);
  }

  viewPublishedComment() {
    const postedComment = Cypress.env('postedComment'); 
    cy.contains(postedComment).should('be.visible');
  }

  clickReplic(){
    cy.contains('span', 'Reply')
      .first()
      .click();
  }

  incompleteCourse(){
    cy.get('.bg-sumawealth-grey-100.h-2\\.5.rounded-full')
      .invoke('attr', 'style')
      .then((style) => {
        const widthMatch = style.match(/width:\s*(\d+)%/);
        if (widthMatch) {
          const percentage = parseInt(widthMatch[1], 10);
          expect(percentage).to.be.lessThan(95);
        } else {
          throw new Error('No se encontró el atributo de estilo con width.');
        }
      });
  }

  clickButonQuiz(){
    cy.contains('span', 'Quiz').click();
  }

  viewModalQuiz(){
    cy.contains('span.font-work-sans.text-sumawealth-blue-100', 'First, finish all your lessons, then you can take the quiz.')
      .should('be.visible');
  }

  clickCertificate(){
    cy.contains('span', 'Certificate').click();
  }

  viewModalCertificate(){
    cy.contains('span.font-work-sans.text-sumawealth-blue-100', "Pass the quiz; then you've got")
      .should('be.visible');
  }

  clickShareCourse(){
    cy.get('button.rounded-full.bg-gray-200')
      .click();
  }

  viewModalShare(){
    cy.contains('span.font-work-sans.text-sumawealth-blue-100', "Share this with friends 📲")
      .should('be.visible');
  }

  titleShareCourse(){
    cy.get('button[aria-label="linkedin"]')
      .should('be.visible')

    cy.get('button[aria-label="facebook"')
      .should('be.visible')
  }

}

export default new DetailsCourses();