Feature: Detalles del curso
  Como usuario
  Quiero ver los detalles de un curso
  Para visualizar las clases, los materiales y el progreso del curso

  Scenario: Ver detalles del curso
    Given que he iniciado sesión en Sumaversity
    And navego a la pagina de All Courses
    When navego a la pagina de details courses
    Then debo ver la descripcion del curso
    And debo ver las clases disponibles
    And debo ver los materiales proporcionados
    And debo ver el progreso del curso

  Scenario: Descargar Material disponibles
    Given que he iniciado sesión en Sumaversity
    And navego a la pagina de All Courses
    And navego a la pagina de details courses
    When selecciono un material PDF
    Then debe ver el documento PDF