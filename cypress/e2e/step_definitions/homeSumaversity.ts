import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homeSumaversityPage from '../../pages/homeSumaversityPage';
import homePage from '../../pages/homePage';
import loginPages from '../../pages/loginPages';
import user from '../../fixtures/example.json';

Given("que he iniciado sesión en Sumaversity", () => {
    loginPages.visit();
    loginPages.fillUserName(user.user.username);
    loginPages.fillPassword(user.user.password);
    loginPages.submit();
    cy.url().should('include', '/homepage');
});

When("estoy en la pagina de inicio", ()=>{
    homePage.sidebar();
    homePage.getSmarter();
});

Then("debo ver el boton MY COURSES", ()=>{
    homeSumaversityPage.myCoursesButon();
});

Then("debo ver el boton ALL COURSES", ()=>{
    homeSumaversityPage.allCoursesButon();
});

Given("estoy en el home del Sumaversity",()=>{
  homePage.sidebar();
  homePage.getSmarter();
});

When("doy click en MY COURSES",()=>{
  homeSumaversityPage.clickMyCourses();
});

Then("debo ver la pagina de MY LEARNING", ()=>{
  homeSumaversityPage.urlMyCourses();
});

When("doy click en ALL COURSES", ()=>{
  homeSumaversityPage.clickAllCourses();
});

Then("debo ver la pagina de ALL COURSES",()=>{
    homeSumaversityPage.urlAllCourses();
})