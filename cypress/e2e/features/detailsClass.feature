Feature: Detalles de la clase
  Como usuario 
  Quiero ver los detalles de la clase
  Para visualizar su contenido 

  Scenario: Ver los detalles de la clase
    Given estoy en un curso
    When doy clic en una clase
    Then debo ser dirigido a la página de "view class"
    And debo ver el título de la clase
    And debo ver la descripción de la clase
    And debo ver el video de la clase

  Scenario: Verificar que se puedan realizar comentarios
    Given estoy en un curso
    When doy clic en una clase
    And publico un comentario
    Then deberia ver el comentario publicado

  Scenario: Verificar que se puedan realizar replicas a los comentarios de una clase
    Given estoy en un curso 
    When doy clic en una clase
    And publico una replica
    Then deberia ver la replica publicada
  
  Scenario: Verificar boton de share class
    Given estoy en un curso
    When doy clic en una clase
    And doy clic en el boton de share class
    Then deberia ver el modal de share class 

  Scenario: Verificar elementos de share class
    Given estoy en un curso 
    When doy clic en una clase
    And doy clic en el boton de share class
    Then deberia ver todos los datos del modal
