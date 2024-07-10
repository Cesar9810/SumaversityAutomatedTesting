class homeSumaversityPage{

    myCoursesButon(){
        cy.get('button[class="relative select-none transition flex-shrink-0 flex items-center justify-center font-semibold text-[16px] leading-[24px] tracking-normal bg-sumawealth-yellow-80 rounded-full font-work-sans text-xs md:text-sm px-2 sm:px-8 h-[46px] md:h-[48px] w-full hover:bg-sumawealth-yellow-60 text-sumawealth-blue-100 focus:bg-sumawealth-yellow-100 !bg-suma text-sumawealth-neutral-0 self-center !h-[56px] !w-[250px] md:!w-[400px] xl:h-[70px]"]')
          .contains('My Courses')
          .should('be.visible');
    }

    clickMyCourses(){
        cy.get('button[class="relative select-none transition flex-shrink-0 flex items-center justify-center font-semibold text-[16px] leading-[24px] tracking-normal bg-sumawealth-yellow-80 rounded-full font-work-sans text-xs md:text-sm px-2 sm:px-8 h-[46px] md:h-[48px] w-full hover:bg-sumawealth-yellow-60 text-sumawealth-blue-100 focus:bg-sumawealth-yellow-100 !bg-suma text-sumawealth-neutral-0 self-center !h-[56px] !w-[250px] md:!w-[400px] xl:h-[70px]"]')
          .contains('My Courses')
          .click();
    }

    allCoursesButon(){
        cy.get('button[class="relative select-none transition flex-shrink-0 flex items-center justify-center font-semibold text-[16px] leading-[24px] tracking-normal bg-sumawealth-yellow-80 rounded-full font-work-sans text-xs md:text-sm px-2 sm:px-8 h-[46px] md:h-[48px] w-full hover:bg-sumawealth-yellow-60 text-sumawealth-blue-100 focus:bg-sumawealth-yellow-100 mt-8 !h-[56px] !w-[250px] md:!w-[400px] xl:h-[70px]"]')
          .contains('All Courses')
          .should('be.visible')
    }

    clickAllCourses(){
        cy.get('button[class="relative select-none transition flex-shrink-0 flex items-center justify-center font-semibold text-[16px] leading-[24px] tracking-normal bg-sumawealth-yellow-80 rounded-full font-work-sans text-xs md:text-sm px-2 sm:px-8 h-[46px] md:h-[48px] w-full hover:bg-sumawealth-yellow-60 text-sumawealth-blue-100 focus:bg-sumawealth-yellow-100 mt-8 !h-[56px] !w-[250px] md:!w-[400px] xl:h-[70px]"]')
          .contains('All Courses')
          .click();
    }

    urlMyCourses(){
        cy.url().should("include", "/my-learning");
    }

    urlAllCourses(){
        cy.url().should("include", "/courses/all");
    }

}

export default new homeSumaversityPage();