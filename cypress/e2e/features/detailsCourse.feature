Feature: Detalles del curso
  Como usuario
  Quiero ver los detalles de un curso
  Para visualizar las clases, los materiales y el progreso del curso

  Scenario: Ver detalles del curso
    Given que estoy en la pagina de details course
    Then debo ver la descripcion del curso
    And debo ver las clases disponibles
    And debo ver los materiales proporcionados
    And debo ver el progreso del curso

  Scenario: Descargar Material disponibles
    Given que estoy en la pagina de details course
    When selecciono un material PDF
    Then debe ver el documento PDF