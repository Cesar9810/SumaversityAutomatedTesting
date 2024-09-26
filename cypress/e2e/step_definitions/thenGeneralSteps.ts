import { Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../pages/homePage';
import homeSumaversityPage from '../../pages/homeSumaversityPage';
import detailsCourses from 'pages/detailsCourses';
import viewClassPages from 'pages/viewClassPages';
import allCoursesPages from 'pages/allCoursesPages';

Then("debo ver la página de inicio de Suma", () => {
    homePage.url();
});

Then("debo ver un mensaje de verificacion de email", () => {
    cy.contains("You’re almost there! We sent you an email, click on the link to complete the sign up.").should('be.visible');
});

Then("debo ver el boton MY COURSES", ()=>{
    homeSumaversityPage.myCoursesButon();
});

Then("debo ver el boton ALL COURSES", ()=>{
    homeSumaversityPage.allCoursesButon();
});

Then("debo ver la pagina de MY LEARNING", ()=>{
    homeSumaversityPage.urlMyCourses();
  });

  Then("debo ver la pagina de ALL COURSES",()=>{
    homeSumaversityPage.urlAllCourses();
});

Then("no debo ver el boton MY COURSES",()=>{
    homeSumaversityPage.myCoursesNotVisible();
});

Then("debo ver la descripcion del curso",()=>{
    detailsCourses.descriptionCourses();
});

Then("debo ver las clases disponibles",()=>{
    detailsCourses.totalClass();
});

Then("debo ver los materiales proporcionados",()=>{
    detailsCourses.totalMaterials();
});

Then("debo ver el progreso del curso",()=>{
    detailsCourses.progressCourse();
})

Then("debo ver el titulo del curso",()=>{
    detailsCourses.titleCourses();
})

Then("debo ver la imagen del curso",()=>{
    detailsCourses.imageCourses();
})

Then('deberia ver lo botones de "Class", "Materials", "Comments", "Quiz", "Certificate"',()=>{
    detailsCourses.butonClasses();
    detailsCourses.butonMaterials();
    detailsCourses.butonComments();
    detailsCourses.butonQuiz();
    detailsCourses.butonCertificate();
})

Then("deberia ver las clases que tiene un curso",()=>{
    detailsCourses.viewClass();
})

Then("deberia ver los comentarios que tiene un curso", ()=>{
    detailsCourses.viewComments();
})

Then("deberia ver el comentario publicado", ()=>{
    detailsCourses.viewPublishedComment();
})

Then("deberia ver el modal de finish all lessons", ()=>{
    detailsCourses.viewModalQuiz();
})

Then("deberia ver el modal de pass the quiz", ()=>{
    detailsCourses.viewModalCertificate();
})

Then("deberia ver el modal de share course",()=>{
    detailsCourses.viewModalShare();
})

Then("deberia ver el  titulo del curso, imagen del curso, boton de facebook y LinkedIn, url y boton de Copy Url",()=>{
    detailsCourses.titleShareCourse();
})

Then('debo ser dirigido a la pagina de view class',()=>{
    viewClassPages.urlClass();
})

Then("debo ver la seccion de trending courses",()=>{
    allCoursesPages.trendingCourses();
})

Then("debo ver las categorias de cursos",()=>{
    allCoursesPages.dineroBootcamp();
    allCoursesPages.jefaBootcamp();
})

Then("debo ser dirigido a la página de Details Course",()=>{
    cy.url().should("include", "/courses/");
})