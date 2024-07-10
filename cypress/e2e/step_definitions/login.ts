import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginPages from "../../pages/loginPages";
import homePage from '../../pages/homePage';
import user from "../../fixtures/example.json";

Given("estoy en la página de inicio de sesión", () => {
    loginPages.visit();
});

When("ingreso mi correo y mi contraseña", () => {
    loginPages.fillUserName(user.user.username);
    loginPages.fillPassword(user.user.password);
});

When("hago clic en el botón de iniciar sesión",()=>{
    loginPages.submit();
});

Then("debo ver la página de inicio de Suma", () => {
    homePage.url();
});