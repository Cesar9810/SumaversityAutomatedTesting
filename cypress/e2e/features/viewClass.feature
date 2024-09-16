Feature: Vista de la clase
  Como usuario
  Quiero ver una clase de un curso
  Para poder estudiar el contenido

  Scenario: Ver propiedades de details class
    Given que he iniciado sesión en Sumaversity
    And estoy en el home del Sumaversity
    And doy click en MY COURSES
    And doy click en un curso
    When doy click en una clase
    Then debo ser dirigido a la pagina de view class
    And debo ver el titulo de la clase
    And debo ver el video de la clase
