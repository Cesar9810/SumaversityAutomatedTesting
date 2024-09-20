class homeSumaversityPage{

    myCoursesButon(){
        cy.get('#__next > div.flex.min-h-screen.flex-col > main > div > div.flex.w-full.flex-col.gap-4.relative.bg-sumawealth-neutral-0.p-4.md\\:bg-transparent > div > button > span > span')
          .should('be.visible')
          .and('contain.text', 'MY COURSES');
    }

    clickMyCourses(){
        cy.get('#__next > div.flex.min-h-screen.flex-col > main > div > div.flex.w-full.flex-col.gap-4.relative.bg-sumawealth-neutral-0.p-4.md\\:bg-transparent > div > button > span > span')
          .contains('MY COURSES')
          .click();
    }

    allCoursesButon() {
        cy.get('#__next > div.flex.min-h-screen.flex-col > main > div > div.flex.w-full.flex-col.gap-4.relative.bg-sumawealth-blue-100.md\\:bg-transparent.md\\:p-4 > div > div:nth-child(3) > button > span > span')
          .should('be.visible')
          .and('contain.text', 'ALL COURSES');
    } 

    clickAllCourses(){
        cy.get('#__next > div.flex.min-h-screen.flex-col > main > div > div.flex.w-full.flex-col.gap-4.relative.bg-sumawealth-blue-100.md\\:bg-transparent.md\\:p-4 > div > div:nth-child(3) > button > span > span')
          .contains('ALL COURSES')
          .click();
    }

    urlMyCourses(){
        cy.url().should("include", "/my-learning");
    }

    urlAllCourses(){
        cy.url().should("include", "/courses/all");
    }

    private buttonSelector: string = '#__next > div.flex.min-h-screen.flex-col > main > div > div.flex.w-full.flex-col.gap-4.relative.bg-sumawealth-neutral-0.p-4.md\\:bg-transparent > div > button > span > span';

    myCoursesNotVisible() {
        cy.get(this.buttonSelector).should('not.exist');
    }

}

export default new homeSumaversityPage();