import { Given } from '@badeball/cypress-cucumber-preprocessor';
import loginPages from "../../pages/loginPages";
import registerPages from '../../pages/registerPages';
import user from '../../fixtures/example.json';
import detailsCourses from 'pages/detailsCourses';
import viewClassPages from 'pages/viewClassPages';
import homeSumaversityPage from 'pages/homeSumaversityPage';
import allCoursesPages from 'pages/allCoursesPages';

Given("estoy en la página de inicio de sesión", () => {
    loginPages.visit();
});

Given('que estoy en la página de registro', () => {
    registerPages.visit();
});

Given("que he iniciado sesión en Sumaversity", () => {
    loginPages.visit();
    loginPages.fillUserName(user.user[0].username);
    loginPages.fillPassword(user.user[0].password);
    loginPages.submit();
    cy.url().should('include', '/sumaversity');
});

Given("que he iniciado sesion con un usuario sin cursos", ()=>{
    console.log(user.user[0].password2);
    console.log(user.user[0].username2);
      loginPages.visit();
      loginPages.fillUserName(user.user[0].username2);
      loginPages.fillPassword(user.user[0].password2);
      loginPages.submit();
      //cy.url().should('include', '/sumaversity');
});

Given("no he completado el curso",()=>{
    detailsCourses.incompleteCourse();
});

Given('doy click en un curso', ()=>{
    viewClassPages.clickContinue();
})

Given("estoy en un curso",()=>{
    loginPages.visit();
    loginPages.fillUserName(user.user[0].username);
    loginPages.fillPassword(user.user[0].password);
    loginPages.submit();
    homeSumaversityPage.clickAllCourses();
    allCoursesPages.clickStartLearning();
})
