import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import allCoursesPages from 'pages/allCoursesPages';
import homePage from 'pages/homePage';
import homeSumaversityPage from 'pages/homeSumaversityPage';

When("navego a la pagina de All Courses",()=>{
    homePage.sidebar();
    homePage.getSmarter();
    homeSumaversityPage.clickAllCourses();
})

Then("debo ver la seccion de trending courses",()=>{
    allCoursesPages.trendingCourses();
})

Then("debo ver las categorias de cursos",()=>{
    allCoursesPages.dineroBootcamp();
    allCoursesPages.jefaBootcamp();
})

When("hago clic en el botón de Start Learning de un curso",()=>{
    allCoursesPages.clickStartLearning();
})

Then("debo ser dirigido a la página de Details Course",()=>{
    cy.url().should("include", "/courses/");
})