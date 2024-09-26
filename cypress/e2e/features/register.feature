Feature: Registro de usuario

  Scenario: Registro exitoso de un nuevo usuario
    Given que estoy en la página de registro
    When ingreso mi nombre, apellido, correo, contraseña y numero de celular 
    And hago clic en el botón de Sign up
    Then debo ver un mensaje de verificacion de email

