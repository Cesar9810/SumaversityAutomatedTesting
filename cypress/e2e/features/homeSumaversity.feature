Feature: Home Sumaversity
  Como usuario registrado
  Quiero navegar por la página de inicio de Sumaversity
  Para acceder a mis cursos y sus categorias

  Scenario: Ver botones de navegación en la página de inicio
    Given que he iniciado sesión en Sumaversity
    When estoy en la pagina de inicio
    Then debo ver el boton MY COURSES
    And debo ver el boton ALL COURSES

  Scenario: El boton de MY COURSES redirige a MY LEARNING
   Given que he iniciado sesión en Sumaversity
   And estoy en el home del Sumaversity
   When doy click en MY COURSES
   Then debo ver la pagina de MY LEARNING

  Scenario: El boton de ALL COURSES redirige a ALL COURSES
    Given que he iniciado sesión en Sumaversity
    And estoy en el home del Sumaversity
    When doy click en ALL COURSES
    Then debo ver la pagina de ALL COURSES

  Scenario: El boton de MY COURSES no se muestra para usuarios sin cursos
    Given que he iniciado sesion con un usuario sin cursos
    When estoy en la pagina de inicio 
    Then no debo ver el boton MY COURSES