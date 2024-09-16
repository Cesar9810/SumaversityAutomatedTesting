import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import allCoursesPages from 'pages/allCoursesPages';
import detailsCourses from 'pages/detailsCourses';

When("navego a la pagina de details courses",()=>{
    allCoursesPages.clickStartLearning();
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
