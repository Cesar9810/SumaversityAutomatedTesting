import {Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import viewClassPages from 'pages/viewClassPages';


Given('doy click en un curso', ()=>{
    viewClassPages.clickContinue();
})

When('doy click en una clase',()=>{
    viewClassPages.clickClass();
})

Then('debo ser dirigido a la pagina de view class',()=>{
    viewClassPages.urlClass();
})

