Feature: Detalles del curso
  Como usuario
  Quiero ver los detalles de un curso
  Para visualizar las clases, los materiales y el progreso del curso

  Scenario: Ver detalles del curso
    Given que he iniciado sesión en Sumaversity
    When navego a los detalles del curso
    Then debo ver el titulo del curso
    And debo ver la imagen del curso
    And debo ver el progreso del curso
    And debo ver la descripcion del curso

  Scenario: Ver botones del curso
    Given que he iniciado sesión en Sumaversity
    When navego a los detalles del curso
    Then deberia ver lo botones de "Class", "Materials", "Comments", "Quiz", "Certificate"

  Scenario: Ver las clases de un curso
    Given que he iniciado sesión en Sumaversity
    And navego a los detalles del curso
    When doy clic en el boton de Class 
    Then deberia ver las clases que tiene un curso

  Scenario: Ver los comentarios de un curso
    Given que he iniciado sesión en Sumaversity
    And navego a los detalles del curso
    When doy clic en el boton de comments 
    Then deberia ver los comentarios que tiene un curso
  
  Scenario: Ver que se puedan realizar comentarios a un curso
    Given que he iniciado sesión en Sumaversity
    And navego a los detalles del curso
    When doy clic en el boton de comments
    And escribo un comentario 
    Then deberia ver el comentario publicado

  Scenario: Verificar que se puedan realizar replicas en un curso
    Given que he iniciado sesión en Sumaversity
    And navego a los detalles del curso
    When doy clic en el boton de comments
    And doy clic al boton de replicas 
    And escribo un comentario
    Then deberia ver el comentario publicado

  Scenario: Verificar el modal de finish all lessons 
    Given que he iniciado sesión en Sumaversity
    And navego a los detalles del curso
    And no he completado el curso 
    When doy clic al boton de quiz 
    Then deberia ver el modal de finish all lessons

  Scenario: Verificar el modal pass the quiz
    Given que he iniciado sesión en Sumaversity
    And navego a los detalles del curso 
    And no he completado el curso 
    When doy clic al boton de get certificate
    Then deberia ver el modal de pass the quiz

  Scenario: Verificar el modal share course
    Given que he iniciado sesión en Sumaversity
    And navego a los detalles del curso 
    When doy clic al boton de share course 
    Then deberia ver el modal de share course

  Scenario: Verificar elementos del modal share course
    Given que he iniciado sesión en Sumaversity
    And navego a los detalles del curso 
    When doy clic al boton de share course 
    Then deberia ver el  titulo del curso, imagen del curso, boton de facebook y LinkedIn, url y boton de Copy Url

  Scenario: Verificar que redirija al quiz
    Given que he iniciado sesión en Sumaversity
    And navego a los detalles del curso completado 
    When doy clic en el boton de quiz 
    Then deberia ver la vista del quiz

  Scenario: Verificar el modal donwload certificate
    Given que he iniciado sesión en Sumaversity
    And navego a los detalles del curso completado 
    When doy click al boton de get certificate
    Then deberia ver el modal de donwload your certificate 

  Scenario: Descargar Material disponibles
    Given que he iniciado sesión en Sumaversity
    And navego a los detalles del curso
    When doy clic en el boton de materials 
    And doy clic en el primer material 
    Then el material disponible deberia descargarse