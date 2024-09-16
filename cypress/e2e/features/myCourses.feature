Feature: My Courses

  Scenario: Verificar que se puedan ver todas las categorias de My Courses
    Given que he iniciado sesión en Sumaversity
    When navego a MY COURSES
    Then deberia ver todas las categorias de los cursos  
    
  Scenario: Verificar que cuando haya un curso en la categoria de My Favorite, este seleccionado el Wishlist button
    Given que he iniciado sesión en Sumaversity
    When navego a MY COURSES
    Then deberia ver un curso en My Favorite
    And el Wishlist button seleccionado 

  Scenario: Verificar que cuando haya un curso en la categoria de Course in Progress, este iniciada la barra de progreso
    Given que he iniciado sesión en Sumaversity
    When navego a MY COURSES
    Then deberia ver un curso en In Progress 
    And ver iniciada su barra de progreso

  Scenario: Verificar que cuando haya un curso en la categoria de Completed Courses, se muestre el boton de View Certificate
    Given que he iniciado sesión en Sumaversity
    When navego a MY COURSES
    Then deberia ver un curso en Completed Courses 
    And ver el boton de "Go To Tha Courses"

  Scenario: Verificar los elementos de las cards
    Given que he iniciado sesión en Sumaversity
    When navego a MY COURSES
    Then deberia ver un curso 
    And deberia ver sus datos