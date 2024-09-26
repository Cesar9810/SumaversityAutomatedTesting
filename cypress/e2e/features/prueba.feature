Feature: Una sola prueba

    Scenario: Ver los detalles de la clase
        Given estoy en un curso
        When doy clic en una clase
        Then debo ser dirigido a la página de "view class"
        And debo ver el título de la clase
        And debo ver la descripción de la clase
        And debo ver el video de la clase
