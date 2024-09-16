Feature: Vista de todos los cursos
  Como usuario
  Quiero ver todos los cursos disponibles en el Sumaversity
  Para poder seleccionar un curso

  Scenario: Ver cursos en tendencia y las categorías
    Given que he iniciado sesión en Sumaversity
    When navego a la pagina de All Courses
    Then debo ver la seccion de trending courses
    And debo ver las categorias de cursos

  Scenario: Seleccionar un curso
    Given que he iniciado sesión en Sumaversity
    And navego a la pagina de All Courses
    When hago clic en el botón de Start Learning de un curso
    Then debo ser dirigido a la página de Details Course
