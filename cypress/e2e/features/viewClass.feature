Feature: Vista de la clase
  Como usuario
  Quiero ver una clase de un curso
  Para poder estudiar el contenido

  Scenario: Ver una clase
    Given que estoy en la pagina de details courses
    When hago clic en una clase especifica
    Then debo ser dirigido a la pagina de view class
    And debo ver el titulo de la clase
    And debo ver el video de la clase
