import { When } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';
import loginPages from "../../pages/loginPages";
import user from "../../fixtures/example.json";
import registerPages from 'pages/registerPages';
import homeSumaversityPage from 'pages/homeSumaversityPage';
import detailsCourses from 'pages/detailsCourses';
import allCoursesPages from 'pages/allCoursesPages';
import viewClassPages from 'pages/viewClassPages';

When("ingreso mi correo y mi contraseña", () => {
    loginPages.fillUserName(user.user[0].username);
    loginPages.fillPassword(user.user[0].password);
});

When("hago clic en el botón de iniciar sesión",()=>{
    loginPages.submit();
});

const user1 = {
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number()
}

When("ingreso mi nombre, apellido, correo, contraseña y numero de celular", () => {
    registerPages.fillEmail(user1.email);
    registerPages.fillPassword(user.user[0].password);
    registerPages.fillFirstName(user1.firstName);
    registerPages.fillLastName(user1.lastName);
    registerPages.fillPhoneNumber(user1.phoneNumber);
});

When("hago clic en el botón de Sign up", () => {
    registerPages.clickSignUp();
});

When("doy click en MY COURSES",()=>{
    homeSumaversityPage.clickMyCourses();
});

When("doy click en ALL COURSES", ()=>{
    homeSumaversityPage.clickAllCourses();
});
  
When("navego a los detalles del curso",()=>{
    homeSumaversityPage.clickAllCourses();
    allCoursesPages.clickStartLearning();
});

When("doy clic en el boton de Class",()=>{
    detailsCourses.clickCourses();
});

When("doy clic en el boton de comments",()=>{
    detailsCourses.clickComments();
})

When("escribo un comentario",()=>{
    detailsCourses.createComments();
});

When("doy clic al boton de replicas",()=>{
    detailsCourses.clickReplic();
})

When("doy clic al boton de quiz",()=>{
    detailsCourses.clickButonQuiz();
})

When("doy clic al boton de get certificate",()=>{
    detailsCourses.clickCertificate();
})

When("doy clic al boton de share course", ()=>{
    detailsCourses.clickShareCourse();
})

When('doy click en una clase',()=>{
    viewClassPages.clickClass();
})

When("navego a la pagina de All Courses",()=>{
    homeSumaversityPage.clickAllCourses();
})

When("hago clic en el botón de Start Learning de un curso",()=>{
    allCoursesPages.clickStartLearning();
})