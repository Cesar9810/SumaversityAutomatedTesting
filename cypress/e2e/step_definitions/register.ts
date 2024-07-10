import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import registerPages from '../../pages/registerPages';
import { faker } from '@faker-js/faker';
import user from "../../fixtures/example.json";

const user1 = {
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number()
}

Given('que estoy en la página de registro', () => {
    registerPages.visit();
});

When("ingreso mi nombre, apellido, correo, contraseña y numero de celular", () => {
    registerPages.fillEmail(user1.email);
    registerPages.fillPassword(user.user.password);
    registerPages.fillFirstName(user1.firstName);
    registerPages.fillLastName(user1.lastName);
    registerPages.fillPhoneNumber(user1.phoneNumber);
});

When("hago clic en el botón de Sign up", () => {
    registerPages.clickSignUp();
});
  
Then("debo ver un mensaje de verificacion de email", () => {
    cy.contains("You’re almost there! We sent you an email, click on the link to complete the sign up.").should('be.visible');
});
